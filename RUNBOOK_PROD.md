# RUNBOOK_PROD - BUZZER

Data ostatniej aktualizacji: 2026-04-21

## 1) Kontekst projektu
- Projekt: statyczna strona WWW BUZZER (HTML/CSS/JS).
- Repozytorium: `https://github.com/filipbortnik/buzzer-zabezpieczenia-www`
- Gałąź produkcyjna: `main`
- Domena produkcyjna: `buzzer-zabezpieczenia.pl`
- Domena dodatkowa: `www.buzzer-zabezpieczenia.pl`

## 2) Infrastruktura produkcyjna
- Serwer: home.pl VPS Linux XS
- Hostname: `buzzer-www-prod`
- System: Ubuntu 24.04 LTS
- IP: `87.106.57.0`
- Webserver: Nginx
- Firewall: UFW (`OpenSSH`, `Nginx Full`)
- Ochrona: fail2ban

## 3) DNS (ustawienia docelowe)
Rekordy muszą wskazywać na VPS:
- `A` dla `buzzer-zabezpieczenia.pl` -> `87.106.57.0`
- `A` dla `www.buzzer-zabezpieczenia.pl` -> `87.106.57.0`

Weryfikacja na serwerze:
```bash
dig +short buzzer-zabezpieczenia.pl
dig +short www.buzzer-zabezpieczenia.pl
```
Oczekiwany wynik:
```text
87.106.57.0
87.106.57.0
```

## 4) SSL/TLS
- Aktywny certyfikat Let's Encrypt (wdrożony przez certbot + nginx plugin).
- Certyfikowane domeny:
  - `buzzer-zabezpieczenia.pl`
  - `www.buzzer-zabezpieczenia.pl`
- Ścieżka certyfikatu:
  - `/etc/letsencrypt/live/buzzer-zabezpieczenia.pl/fullchain.pem`
- Ścieżka klucza:
  - `/etc/letsencrypt/live/buzzer-zabezpieczenia.pl/privkey.pem`
- Odnowienie automatyczne: skonfigurowane przez certbot.

Test odnowienia:
```bash
certbot renew --dry-run
```

## 5) Nginx
Plik konfiguracji:
- `/etc/nginx/sites-available/buzzer`
- symlink: `/etc/nginx/sites-enabled/buzzer`

Root strony:
- `/var/www/buzzer`

Aktualnie:
- HTTPS działa (`200`)
- HTTP przekierowuje do HTTPS (`301`)

Test:
```bash
curl -I https://buzzer-zabezpieczenia.pl
curl -I https://www.buzzer-zabezpieczenia.pl
curl -I http://buzzer-zabezpieczenia.pl
curl -I http://www.buzzer-zabezpieczenia.pl
```

SEO baseline (301 + spójna domena + fallback `.html`):
- przykład konfiguracji: `nginx-seo.example.conf`

## 6) Deploy i auto-deploy
Kod produkcyjny jest pobierany z GitHub do:
- `/var/www/buzzer`

Auto-deploy co 5 minut (cron root):
```cron
*/5 * * * * cd /var/www/buzzer && git pull --ff-only >/dev/null 2>&1
```

Podgląd crona:
```bash
crontab -l
```

Ręczny deploy:
```bash
cd /var/www/buzzer
git pull --ff-only
```

## 7) Dane firmowe wdrożone na stronie
- Facebook: `https://www.facebook.com/profile.php?id=100086625374559`
- Adres: `Leskiego 15/31, 80-180 Gdańsk`
- NIP: `604-021-32-02`
- Wdrożone w stopkach oraz sekcjach kontaktowych.
- Wdrożone także w schema (JSON-LD) na kluczowych podstronach.

## 8) Branding i UI (wdrożone)
- Logo wdrożone globalnie w nagłówku:
  - `assets/img/buzzer-logo.png`
- Kolorystyka dostosowana do logo:
  - granat/czerwień BUZZER
- Zmiany w:
  - `assets/css/styles.css`

## 9) Struktura usług (wdrożone)
Dodane/zmienione podstrony:
- `domofony.html` (zastąpienie starego `wideodomofony.html`)
- `kontrola-dostepu.html`
- `sieci-internetowe-lan-wifi.html`
- `spawanie-swiatlowodow.html`
- `pomoc-zdalna.html`
- `pogotowie-weekendowe.html` (rozszerzone o kwestie internetu/LAN/Wi-Fi)

Redirect techniczny:
- `wideodomofony.html` -> `domofony.html`

## 10) Runbook aktualizacji strony (operacyjny)
1. Zrób zmiany lokalnie.
2. Wypchnij na `main`:
   ```bash
   git add .
   git commit -m "opis zmian"
   git push
   ```
3. Odczekaj 5-6 minut (cron auto-pull).
4. Sprawdź:
   - `https://buzzer-zabezpieczenia.pl`
   - `https://www.buzzer-zabezpieczenia.pl`
5. Wymuś odświeżenie przeglądarki (`Ctrl+F5`).
6. Smoke-test:
   - menu,
   - formularz,
   - tel-linki,
   - 2-3 kluczowe podstrony.

## 11) Comiesięczny maintenance
```bash
apt update && apt upgrade -y
systemctl status nginx --no-pager
systemctl status fail2ban --no-pager
certbot renew --dry-run
```

## 12) Troubleshooting
### A) Strona nie aktualizuje się po push
```bash
cd /var/www/buzzer
git pull --ff-only
```
Sprawdź:
```bash
crontab -l
```

### B) Nginx błąd po zmianie configu
```bash
nginx -t
systemctl reload nginx
```

### C) Domena nie działa
Sprawdź DNS:
```bash
dig +short buzzer-zabezpieczenia.pl
dig +short www.buzzer-zabezpieczenia.pl
```

### D) SSL błąd
Sprawdź certbot:
```bash
certbot renew --dry-run
```

## 13) Backup i rollback
Przed większą zmianą:
1. Snapshot VPS w panelu home.pl.
2. Backup katalogu:
   ```bash
   tar -czf /root/buzzer-backup-$(date +%F).tar.gz /var/www/buzzer
   ```

Szybki rollback kodu:
```bash
cd /var/www/buzzer
git log --oneline -n 5
git reset --hard <HASH_POPRZEDNIEGO_COMMITA>
```

## 14) Bezpieczeństwo dostępu (SSH)
- Logowanie działa kluczem SSH.
- Klucz prywatny lokalnie: `~/.ssh/buzzer_vps`
- Publiczny klucz został dodany w home.pl przy konfiguracji VPS.

Rekomendacja:
- Nie używać hasła root do codziennej pracy.
- Docelowo utworzyć użytkownika technicznego z sudo i wyłączyć login root po SSH.

## 15) Najważniejsze ścieżki na serwerze
- Strona: `/var/www/buzzer`
- Nginx site: `/etc/nginx/sites-available/buzzer`
- Nginx enabled: `/etc/nginx/sites-enabled/buzzer`
- Certbot log: `/var/log/letsencrypt/letsencrypt.log`

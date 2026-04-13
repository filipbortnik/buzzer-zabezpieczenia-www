# Wdrożenie strony na hosting (site-v2)

Aktualizacja: 2026-03-01

## Cel
Instrukcja publikacji strony statycznej `site-v2` na hostingu z domeną, SSL i działającym formularzem kontaktowym.

## Struktura projektu do publikacji
Wgraj zawartość katalogu `site-v2`:
- `index.html`
- `uslugi.html`
- `alarmy-domowe.html`
- `monitoring-cctv.html`
- `wideodomofony.html`
- `serwis-konserwacja.html`
- `realizacje.html`
- `o-nas.html`
- `kontakt.html`
- `assets/`
- `robots.txt`
- `sitemap.xml`

Pliki dokumentacyjne (`ARCHITEKTURA.md`, `PROJECT_MEMORY.md`, `README_DEPLOY.md`, `WDROZENIE_HOSTING.md`) nie muszą być publikowane.

## Wariant rekomendowany: Shared hosting (cPanel/DirectAdmin)
To najlepsza opcja dla tej wersji strony: najtaniej, najprościej, bez serwera aplikacyjnego.

### 1. Przygotuj domenę i DNS
1. Dodaj domenę w panelu hostingu.
2. Ustaw rekordy DNS:
- `A` dla `@` -> IP hostingu.
- `CNAME` dla `www` -> `@`.
3. Czas propagacji DNS: zwykle od kilku minut do 24 godzin.

### 2. Wgraj pliki strony
1. Wejdź do katalogu publikacji (`public_html` lub katalog domeny).
2. Wgraj wszystkie pliki z `site-v2` z zachowaniem struktury katalogów.
3. Upewnij się, że strona startuje z `index.html`.

### 3. Włącz SSL (HTTPS)
1. Uruchom certyfikat Let’s Encrypt w panelu hostingu.
2. Wymuś przekierowanie z HTTP na HTTPS.
3. Sprawdź, czy działa:
- `https://twojadomena.pl`
- `https://www.twojadomena.pl`

Przykładowe przekierowanie w `.htaccess`:

```apache
RewriteEngine On
RewriteCond %{HTTPS} !=on
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### 4. Zaktualizuj URL-e produkcyjne
1. W plikach HTML ustaw finalny adres domeny w `canonical`.
2. W `sitemap.xml` wpisz finalną domenę produkcyjną.
3. Zweryfikuj, czy nie ma odwołań do lokalnych ścieżek `file:///`.

### 5. Podłącz formularz kontaktowy
Aktualnie formularz jest w trybie demo (`data-form-demo` w `kontakt.html`).

1. Usuń `data-form-demo`.
2. Ustaw `action` i `method="post"` dla realnego endpointu.
3. Polecane warianty:
- webhook do Make/Zapier -> CRM + e-mail/SMS,
- endpoint własny (PHP/Node) na hostingu,
- usługa typu Formspree/Web3Forms.

## Alternatywa: Hosting statyczny (Netlify/Vercel/Cloudflare Pages)
Ten wariant jest szybki i wygodny, jeśli strona ma być rozwijana przez Git.

1. Wgraj repozytorium z katalogiem `site-v2`.
2. Ustaw katalog publikacji na `site-v2`.
3. Podepnij domenę i ustaw DNS zgodnie z instrukcją dostawcy.
4. Włącz SSL i przekierowania na HTTPS.
5. Formularz podłącz przez webhook/API (jak wyżej).

## Checklista odbioru po wdrożeniu
1. Strony otwierają się poprawnie na mobile i desktop.
2. Menu mobilne działa na każdej podstronie.
3. Kliknięcie telefonu działa (`tel:+48573926198`).
4. Formularz wysyła zgłoszenie do właściwego systemu.
5. `robots.txt` i `sitemap.xml` są dostępne publicznie.
6. Brak błędów 404 dla linków wewnętrznych.
7. HTTPS działa bez ostrzeżeń certyfikatu.
8. Polskie znaki są widoczne na wszystkich stronach.

## Checklista SEO i analityki
1. Dodaj domenę do Google Search Console.
2. Wyślij `sitemap.xml` do indeksacji.
3. Podłącz GA4 lub GTM.
4. Zweryfikuj eventy CTA i formularza w `dataLayer`.

## Częste błędy
1. Zmiana nazw plików na wersje z polskimi znakami.
- Nie rób tego. Nazwy plików i linki techniczne powinny pozostać ASCII (np. `uslugi.html`).

2. Niepełne wgranie katalogu `assets/`.
- Powoduje brak styli i skryptów.

3. Brak aktualizacji `canonical` i `sitemap.xml`.
- To obniża jakość SEO i może mieszać indeksację.

## Plan dalszego rozwoju
1. Dodać politykę prywatności i checkbox RODO.
2. Podłączyć CRM i automatyczne odpowiedzi leadowe.
3. Rozszerzyć sekcję realizacji o więcej case studies i zdjęć.
4. Rozbudować treści lokalne SEO (miasta i obszary działania).

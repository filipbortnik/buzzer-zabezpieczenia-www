# Plan Wdrożenia SEO - BUZZER (backlog etapowy)

Data: 2026-04-21  
Projekt: `site-v2`  
Domena docelowa (kanoniczna): `https://buzzer-zabezpieczenia.pl`

## Etap 1 - Fundament techniczny SEO (Priorytet: Krytyczny)
Cel: Ustabilizować indeksację i usunąć konflikty domen/URL.

### Taski
- [ ] Wybrać i zatwierdzić 1 domenę kanoniczną: `https://buzzer-zabezpieczenia.pl`
- [ ] Ujednolicić `canonical` na wszystkich podstronach do domeny kanonicznej
- [ ] Ujednolicić format URL w całym serwisie (decyzja: `.html` albo clean URL)
- [ ] Ustawić przekierowania `301`:
- [ ] `http -> https`
- [ ] `www -> bez www` (lub odwrotnie, ale konsekwentnie)
- [ ] stare adresy -> aktualne adresy
- [ ] Zaktualizować `sitemap.xml` do finalnej domeny i finalnych URL
- [ ] Zaktualizować `robots.txt` (link do aktualnej sitemapy)
- [ ] Potwierdzić, że `dziekujemy.html` ma `noindex`

### Kryteria odbioru
- [ ] Każdy URL ma poprawny self-canonical
- [ ] Nie ma mieszania `.com.pl` i `.pl` w canonical/sitemap
- [ ] Wszystkie przekierowania 301 działają poprawnie
- [ ] Sitemapa przechodzi walidację i zwraca 200

## Etap 2 - On-page SEO i struktura treści (Priorytet: Wysoki)
Cel: Dopasować strony do intencji wyszukiwania i poprawić CTR.

### Taski
- [ ] Uporządkować `title` na wszystkich podstronach usługowych (fraza + lokalizacja + marka)
- [ ] Uzupełnić `meta description` (unikalne, sprzedażowe, bez duplikatów)
- [ ] Przejrzeć strukturę H1-H2-H3 (jedno H1 na stronę)
- [ ] Rozbudować strony usług o sekcje:
- [ ] Dla kogo jest usługa
- [ ] Co zawiera usługa
- [ ] Obszar działania (Pomorskie/Trójmiasto)
- [ ] Czas realizacji i serwis
- [ ] CTA do kontaktu
- [ ] Dodać notkę cenową pod pakietami: `Do cen należy doliczyć VAT`
- [ ] Ujednolicić anchor texty w linkowaniu wewnętrznym

### Kryteria odbioru
- [ ] Każda strona usługowa ma komplet meta danych i logiczne nagłówki
- [ ] Treści odpowiadają na pytania klienta (zakres, cena, czas, kontakt)
- [ ] Brak duplikatów title/description

## Etap 3 - Linkowanie wewnętrzne i architektura informacji (Priorytet: Wysoki)
Cel: Wzmocnić najważniejsze podstrony i ścieżkę konwersji.

### Taski
- [ ] Dodać sekcję „Powiązane usługi” na każdej podstronie usługowej
- [ ] Połączyć realizacje z odpowiadającymi usługami (i odwrotnie)
- [ ] Dodać wewnętrzne linki kontekstowe do `kontakt.html`
- [ ] Uspójnić „Szybkie linki” w stopce na wszystkich stronach
- [ ] Sprawdzić i naprawić wszystkie linki 404

### Kryteria odbioru
- [ ] Najważniejsze usługi mają więcej linków wewnętrznych niż strony poboczne
- [ ] Brak martwych linków
- [ ] Użytkownik dociera do formularza z każdej podstrony w max 2 kliknięcia

## Etap 4 - Local SEO (Priorytet: Wysoki)
Cel: Zwiększyć widoczność na zapytania lokalne i w mapach Google.

### Taski
- [ ] Zweryfikować i uzupełnić Google Business Profile (GBP)
- [ ] Spójność NAP (Nazwa, Adres, Telefon) między stroną i GBP
- [ ] Uzupełnić kategorie usług i opis firmy w GBP
- [ ] Dodać aktualne zdjęcia realizacji do GBP
- [ ] Uruchomić proces pozyskiwania opinii po realizacji
- [ ] Odpowiadać na wszystkie nowe opinie (SLA: 24-72h)
- [ ] Dodać firmę do lokalnych katalogów branżowych (spójne NAP)

### Kryteria odbioru
- [ ] Profil GBP kompletny i spójny ze stroną
- [ ] Opinie przyrastają regularnie (min. cel miesięczny)
- [ ] Brak rozjazdu danych kontaktowych między źródłami

## Etap 5 - Dane strukturalne (Schema) (Priorytet: Średni/Wysoki)
Cel: Ułatwić Google zrozumienie usług i kontekstu lokalnego.

### Taski
- [ ] Utrzymać i dopracować `LocalBusiness` na stronie głównej
- [ ] Dodać `Service` schema na podstronach usług
- [ ] Dodać `FAQPage` tam, gdzie FAQ faktycznie występuje
- [ ] Walidacja w Rich Results Test

### Kryteria odbioru
- [ ] Brak błędów krytycznych schema
- [ ] Najważniejsze strony mają poprawne dane strukturalne

## Etap 6 - Performance i mobile UX (Priorytet: Średni)
Cel: Poprawić szybkość i użyteczność mobilną (wpływ na SEO i konwersję).

### Taski
- [ ] Skonwertować ciężkie obrazy do WebP/AVIF (tam, gdzie sensowne)
- [ ] Włączyć lazy-loading dla grafik poza pierwszym ekranem
- [ ] Ustawić width/height dla obrazów (redukcja CLS)
- [ ] Ograniczyć blokujące zasoby CSS/JS
- [ ] Sprawdzić mobile UX (nagłówek, CTA, formularz)

### Kryteria odbioru
- [ ] Core Web Vitals poprawione na kluczowych URL
- [ ] Brak krytycznych problemów mobilnych

## Etap 7 - Monitoring, pomiar, iteracje (Priorytet: Stały)
Cel: Prowadzić SEO jako proces, nie jednorazowe zadanie.

### Taski
- [ ] Skonfigurować Google Search Console (weryfikacja domeny)
- [ ] Zgłosić aktualną `sitemap.xml`
- [ ] Skonfigurować GA4 + konwersje (formularz, telefon)
- [ ] Ustawić raport tygodniowy KPI:
- [ ] Kliknięcia organiczne
- [ ] Średnia pozycja
- [ ] CTR
- [ ] Liczba leadów
- [ ] Liczba połączeń tel.
- [ ] Wprowadzić cykl aktualizacji treści (min. 1 aktualizacja/miesiąc)

### Kryteria odbioru
- [ ] Działa stały monitoring efektów
- [ ] Decyzje SEO podejmowane na podstawie danych

---

## Backlog „Quick Wins” (do zrobienia od razu)
- [ ] Spójna domena w canonical + sitemap + robots
- [ ] Jednolity format URL (bez mieszania wariantów)
- [ ] Notka VAT przy pakietach
- [ ] Rozbudowa 2 najważniejszych stron usługowych pod lokalne frazy
- [ ] Publikacja 3 nowych realizacji z opisem „co zrobiono + gdzie”
- [ ] Zgłoszenie sitemapy w GSC

## Proponowana kolejność wdrożenia
1. Etap 1 (techniczny)  
2. Etap 2 + 3 (treści + linkowanie)  
3. Etap 4 (local SEO)  
4. Etap 5 + 6 (schema + performance)  
5. Etap 7 (monitoring ciągły)

## Uwagi biznesowe
- Najszybszy efekt zwykle daje: spójność domeny + GBP + opinie + treści lokalne usług.
- SEO to proces 3-6 miesięcy; pierwsze wzrosty często pojawiają się wcześniej, ale wymagają regularnych iteracji.
# Wdrożenie i dalszy rozwój (site-v2)

## Główna instrukcja wdrożenia
Pełny przewodnik publikacji znajduje się w pliku:
- `WDROZENIE_HOSTING.md`

## Co jest gotowe
- Architektura lead-generation dla firmy montującej systemy zabezpieczeń.
- Strona główna, usługi, podstrony usług, realizacje, o nas i kontakt.
- Formularz leadowy (wersja demo) z walidacją po stronie klienta.
- Warstwa SEO techniczna: metadane, `robots.txt`, `sitemap.xml`.
- Warstwa analityczna frontend: eventy kliknięć CTA i wysyłki formularza.

## Co podłączyć przed produkcją
1. Formularz do CRM/API.
- W `kontakt.html` formularz ma `data-form-demo`.
- Usuń atrybut `data-form-demo` i ustaw prawdziwe `action` + `method`.
- Opcja: webhook do CRM (np. HubSpot, Pipedrive, Make/Zapier).

2. Analityka.
- Podłącz GTM lub GA4.
- Eventy są pushowane do `dataLayer` przez `assets/js/main.js`.

3. URL produkcyjne.
- Uzgodnij routing serwera (np. `/kontakt` -> `kontakt.html` albo clean URLs).
- Zaktualizuj canonicale i sitemap pod finalne URL.

4. Prawne i RODO.
- Dodaj stronę polityki prywatności.
- Uzupełnij treść zgody przy formularzu.

## Lista techniczna po publikacji
- Sprawdź Core Web Vitals (LCP/CLS/INP).
- Sprawdź indeksowanie w Google Search Console.
- Zweryfikuj zdarzenia konwersji (klik tel i formularz).
- Uruchom monitoring błędów 404 i formularza.

## QA językowe (2026-03-01)
- Zakończono pełny przegląd 9/9 stron HTML pod kątem polskich znaków.
- Nie wykryto pozostałych braków diakrytyki w treści użytkowej.
- Potwierdzono, że linki techniczne pozostały w formie ASCII (np. `uslugi.html`).

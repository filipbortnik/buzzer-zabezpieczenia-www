# Backlog wdrożeniowy BUZZER

Status startowy: `To do`  
Data startu: `20.04.2026`

## KPI docelowe
1. Wzrost współczynnika konwersji formularza o min. 30%.
2. Wzrost kliknięć `tel:` o min. 20%.
3. Spadek bounce rate na stronach usługowych o min. 15%.
4. Co najmniej 1 lead dziennie z nowych podstron usługowych po 30 dniach.

## Backlog
| ID | Iteracja | Task | Priorytet | Owner | ETA | Status | Kryterium akceptacji |
|---|---|---|---|---|---|---|---|
| BL-001 | Sprint 0 | Podpiąć formularz na `index.html` do backendu/CRM | Krytyczny | Dev | 0.5d | To do | Lead zapisuje się w CRM, brak błędów 4xx/5xx |
| BL-002 | Sprint 0 | Podpiąć formularz na `kontakt.html` do backendu/CRM | Krytyczny | Dev | 0.5d | To do | Lead zapisuje się w CRM, oba formularze działają identycznie |
| BL-003 | Sprint 0 | Dodać komunikat sukcesu po realnym wysłaniu formularza | Wysoki | Dev | 0.25d | To do | Użytkownik dostaje potwierdzenie wysyłki i numer zgłoszenia lub jasny komunikat |
| BL-004 | Sprint 0 | Dodać automatyczne potwierdzenie e-mail/SMS po zgłoszeniu | Wysoki | Dev/CRM | 0.5d | To do | Klient dostaje auto-potwierdzenie do 1 min |
| BL-005 | Sprint 0 | Ustawić GA4 eventy: `form_submit_success`, `click_tel`, `click_cta_service`, `view_service_page` | Wysoki | Dev/Analityka | 0.5d | To do | Eventy widoczne w GA4 DebugView i raportach |
| BL-006 | Sprint 0 | Ujednolicić obszar działania na wszystkich stronach i w schema | Wysoki | Dev/Owner | 0.25d | To do | Ten sam komunikat geograficzny na `index`, `kontakt`, `pogotowie`, schema |
| BL-007 | Sprint 0 | Usunąć/zmienić komunikat „To wersja demonstracyjna” po podpięciu CRM | Wysoki | Dev | 0.25d | To do | Brak treści sugerujących wersję testową |
| BL-008 | Sprint 1 | Strona główna: dodać sekcję segmentacji „Dla domu” / „Dla firm” | Wysoki | Dev/Content | 0.5d | To do | Użytkownik może wejść w ścieżkę domową lub firmową jednym kliknięciem |
| BL-009 | Sprint 1 | Strona główna: dodać twarde dowody (np. liczba realizacji, czas reakcji, obszar) | Wysoki | Dev/Owner | 0.5d | To do | Widoczne min. 3 liczby/konkretne wskaźniki |
| BL-010 | Sprint 1 | `kontakt.html`: dodać sekcję „Co dalej po zgłoszeniu” (krok 1-2-3) | Średni | Dev/Content | 0.25d | To do | Użytkownik zna proces obsługi i czas odpowiedzi |
| BL-011 | Sprint 1 | `pogotowie-weekendowe.html`: dopisać SLA i zasady priorytetyzacji zgłoszeń | Wysoki | Dev/Owner | 0.5d | To do | Strona zawiera czas reakcji i kryteria pilności |
| BL-012 | Sprint 1 | `uslugi.html`: podzielić usługi na „Najczęściej wybierane” i „Specjalistyczne” | Wysoki | Dev/UX | 0.5d | To do | Katalog usług nie jest płaski, łatwiej wybrać właściwą usługę |
| BL-013 | Sprint 1 | Dodać etykiety przy usługach: `Dom`, `Firma`, `Dom/Firma` | Średni | Dev | 0.25d | To do | Każda karta usługi ma jasny target |
| BL-014 | Sprint 2 | `alarmy-domowe.html`: dodać 2-3 pakiety usługowe (np. Start/Standard/Pro) | Wysoki | Dev/Owner | 0.5d | To do | Pakiety mają zakres i punkt wejścia cenowego |
| BL-015 | Sprint 2 | `monitoring-cctv.html`: dopisać parametry decyzyjne (retencja, liczba kamer) | Średni | Dev/Owner | 0.5d | To do | Strona odpowiada na kluczowe pytania zakupowe |
| BL-016 | Sprint 2 | `domofony.html`: dodać warianty wdrożenia (dom, osiedle, biuro) | Średni | Dev/Content | 0.5d | To do | Są min. 3 scenariusze i CTA do kontaktu |
| BL-017 | Sprint 2 | `kontrola-dostepu.html`: dopisać korzyści biznesowe mierzalne | Wysoki | Dev/Owner | 0.5d | To do | Min. 3 korzyści biznesowe opisane językiem efektu |
| BL-018 | Sprint 2 | `sieci-internetowe-lan-wifi.html`: dopisać efekt biznesowy i domowy | Średni | Dev/Content | 0.5d | To do | Jasny efekt „przed/po” dla klienta |
| BL-019 | Sprint 2 | `spawanie-swiatlowodow.html`: dodać model interwencji awaryjnej | Średni | Dev/Owner | 0.5d | To do | Opisana ścieżka zgłoszenie -> diagnoza -> realizacja |
| BL-020 | Sprint 2 | `pomoc-zdalna.html`: dodać proces i czasy odpowiedzi | Średni | Dev/Owner | 0.5d | To do | Użytkownik zna czas pierwszego kontaktu i zakres wsparcia |
| BL-021 | Sprint 3 | `realizacje.html`: dodać mini case studies (problem -> wdrożenie -> efekt) | Wysoki | Dev/Owner | 1d | To do | Każda realizacja ma konkretny opis biznesowy |
| BL-022 | Sprint 3 | `o-nas.html`: dodać sekcję wiarygodności (lata, realizacje, certyfikaty) | Wysoki | Dev/Owner | 0.75d | To do | Widoczne min. 3 elementy zaufania |
| BL-023 | Sprint 3 | Dodać sekcję opinii/referencji (home + wybrane podstrony) | Wysoki | Dev/Owner | 0.75d | To do | Min. 3 opinie z przypisaniem typu klienta |
| BL-024 | Sprint 3 | Dodać FAQ sprzedażowe dla firm (SLA, serwis, umowy) | Średni | Dev/Content | 0.5d | To do | FAQ odpowiada na min. 5 obiekcji zakupowych |
| BL-025 | Sprint 4 | Ujednolicić meta title/description po zmianach treści i nazewnictwa | Wysoki | Dev/SEO | 0.5d | To do | Brak niespójności nazw usług i targetu |
| BL-026 | Sprint 4 | Sprawdzić canonical, sitemap, robots po finalnym URL map | Wysoki | Dev/SEO | 0.5d | To do | Wszystkie URL-e usług są w sitemap i mają poprawny canonical |
| BL-027 | Sprint 4 | Dodać schema FAQ/Service na stronach usługowych | Średni | Dev/SEO | 0.75d | To do | Structured data przechodzi walidację |
| BL-028 | Sprint 4 | Zweryfikować redirect `wideodomofony.html` -> `domofony.html` na produkcji | Wysoki | Dev | 0.25d | To do | Redirect działa i nie powoduje pętli/błędów |
| BL-029 | Go-live | Smoke test po publikacji na domenę docelową | Krytyczny | Dev | 0.5d | To do | Formularz, tel-linki, CTA, wszystkie nowe URL-e działają |
| BL-030 | Go-live + 7d | Monitoring KPI i jakości leadów przez 7 dni | Wysoki | Dev/Owner | 7d | To do | Raport KPI + lista poprawek po realnych danych |

## Brakujące informacje (blokery / półblokery)
1. Finalny czas reakcji (SLA) dla:
   - standardowego kontaktu,
   - pogotowia weekendowego,
   - pomocy zdalnej.
2. Finalny model rozliczeń (choćby orientacyjny) dla:
   - pogotowia weekendowego,
   - pomocy zdalnej,
   - spawania światłowodów.
3. Materiały wiarygodności:
   - liczba realizacji,
   - lata doświadczenia,
   - certyfikaty/partnerzy,
   - min. 3 referencje/opinie.
4. Dane do case studies:
   - minimum 3 realizacje opisane: problem -> wdrożenie -> efekt.
5. Decyzja komunikacyjna:
   - pozycjonowanie bardziej `premium` czy `value-for-money`.


# Architektura strony BUZZER (wersja migracyjna)

## Cel biznesowy
- Generowanie leadow: telefon + formularz wyceny.
- Pokazanie uslug i wiarygodnosci lokalnej.

## Struktura informacji
1. `/index.html` - strona glowna (najszybsza droga do kontaktu)
2. `/uslugi.html` - przeglad uslug
3. `/alarmy-domowe.html` - usluga dla domow
4. `/monitoring-cctv.html` - usluga monitoringu
5. `/wideodomofony.html` - usluga wideodomofonow
6. `/serwis-konserwacja.html` - utrzymanie i serwis
7. `/realizacje.html` - portfolio + krotkie case study
8. `/o-nas.html` - wiarygodnosc firmy
9. `/kontakt.html` - formularz + dane kontaktowe

## Lejek konwersji
- Wejscie z reklamy/SEO -> Home lub podstrona uslugi.
- Uzytkownik widzi CTA: "Umow bezplatna wycene" oraz "Zadzwon".
- Przejscie do Kontakt lub klik w tel.
- Formularz leadowy: imie, telefon, lokalizacja, typ obiektu, termin.

## Standard UX
- Mobile-first.
- Sticky dolny pasek na mobile: tel + wycena.
- Jeden glowny CTA na kazdym ekranie.
- Sekcje wiarygodnosci: realizacje, proces, FAQ.

## Dalszy rozwoj
- Podpiecie CRM i automatyzacji mail/SMS.
- Integracja GA4 + eventy klikniecia telefonu i formularza.
- Rozbudowa tresci SEO dla miast i fraz lokalnych.

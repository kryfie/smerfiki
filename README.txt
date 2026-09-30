SMERFIKI — DEMO 3 PLACÓWKI / NETLIFY + SANITY READY
====================================================

1. DEMO
- Strona pokazuje Smerfiki jako jedną markę z 3 placówkami.
- Gdynia i Gdańsk mają obecne adresy.
- Trzecia placówka jest celowo pokazana jako „Otwarcie wkrótce”, ponieważ jej lokalizacja nie została jeszcze wpisana do demo.
- Kafel trzeciej placówki prowadzi do formularza zainteresowania.

2. SZYBKI DEPLOY NA NETLIFY
- Wrzuć zawartość ZIP przez Netlify Drop / Deploy manually.
- index.html znajduje się w katalogu głównym, więc demo powinno wystartować od razu.
- Formularz kontaktowy ma data-netlify="true" i może zbierać zgłoszenia w Netlify Forms.

3. TREŚĆ DEMO
- content/site.json — główna treść, dane kontaktowe i 3 placówki.
- content/news.json — przykładowe aktualności.

4. SANITY CMS
- Demo działa bez Sanity.
- Katalog sanity/ zawiera starter schematów pod docelowy CMS.
- Po akceptacji projektu konfigurujemy właściwy projekt Sanity i podłączamy frontend do Content Lake.
- Pracownica klienta może później edytować placówki, aktualności, zdjęcia i podstawowe treści z panelu Sanity Studio.

5. FORMULARZE
- Dane rodziców nie powinny być przechowywane jako publiczne dokumenty Sanity.
- Formularz można zostawić w Netlify Forms lub podłączyć później do skrzynki/CRM.

6. PRZED PRODUKCJĄ
- podmienić „Nowa placówka” na właściwą nazwę i adres,
- dodać realne zdjęcia każdej placówki,
- podłączyć Sanity,
- podłączyć domenę zlobeksmerfiki.pl,
- sprawdzić zgody/RODO i politykę prywatności,
- ustawić finalne skrzynki e-mail i odbiorców formularzy.


PODSTRONY PLACÓWEK
------------------
/placowki/gdynia/
/placowki/gdansk/
/placowki/nowa-placowka/

Kafle w sekcji Placówki na stronie głównej są w całości klikalne. W wersji produkcyjnej podstrony placówek będą generowane z danych Sanity (slug, opis, galeria, dane kontaktowe).

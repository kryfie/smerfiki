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


AKTUALIZACJA 13.10.2026
- Dodano prawdziwe zdjęcia placówek (assets/gallery, WebP).
- Przywrócono teksty z poprzedniej strony Smerfików.
- Dodano sekcję dofinansowania MALUCH+ oraz link Facebook.


AKTUALIZACJA 13.10.2026 — v3
- Dodano cztery grafiki Smerfów do sekcji „Oferujemy” na stronie głównej.
- Grafiki znajdują się w assets/smurfs/.
- Zachowano pastelowe tła kart i responsywny układ.


7. RODO / PRYWATNOŚĆ (13.10.2026)
- Formularze zawierają warstwową informację o prywatności i obowiązkowe potwierdzenie zapoznania się z Polityką prywatności (nie jest to zgoda marketingowa).
- Polityka prywatności: /polityka-prywatnosci/ oraz /en/privacy-policy/.
- Administrator wpisany w polityce: Firma Handlowo-Usługowa Wojciech Sekuła, ul. Wójta Radtkego 36/40, 81-355 Gdynia. POTWIERDŹ te dane z klientem przed produkcją.
- Retencja wpisana w polityce: standardowo do 12 miesięcy dla zapytań bez umowy. Trzeba rzeczywiście regularnie usuwać stare zgłoszenia z Netlify Forms.
- Formularz prosi, aby nie wysyłać PESEL ani danych o zdrowiu dziecka.
- Usunięto zewnętrzne Google Fonts; obecna wersja nie ma analityki, reklam ani osadzonych map/social media, więc nie dodawano banera zgód cookies.

8. WERSJA ANGIELSKA
- Strona główna: /en/
- Gdynia: /en/locations/gdynia/
- Gdańsk: /en/locations/gdansk/
- Nowa placówka: /en/locations/new-location/
- Polityka prywatności: /en/privacy-policy/
- Przełącznik PL/EN jest w nagłówkach.

9. FORMULARZE
- PL: kontakt, kontakt-gdynia, kontakt-gdansk, kontakt-nowa-placowka.
- EN: contact-en oraz odpowiednie formularze oddziałów z sufiksem -en.
- Po wysłaniu formularza użytkownik trafia na własną stronę podziękowania.
- Netlify zaleca regularne zarządzanie i usuwanie zgłoszeń zawierających dane osobowe.

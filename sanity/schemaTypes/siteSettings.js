export default {
  name: 'siteSettings',
  title: 'Ustawienia strony',
  type: 'document',
  fields: [
    {name: 'announcement', title: 'Pasek ogłoszenia', type: 'string'},
    {name: 'heroTitle', title: 'Hasło główne', type: 'string'},
    {name: 'heroText', title: 'Opis na stronie głównej', type: 'text'},
    {name: 'email', title: 'E-mail', type: 'string'},
    {name: 'phone1', title: 'Telefon 1', type: 'string'},
    {name: 'phone2', title: 'Telefon 2', type: 'string'}
  ]
}

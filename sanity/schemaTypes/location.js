export default {
  name: 'location',
  title: 'Placówki',
  type: 'document',
  fields: [
    {name: 'name', title: 'Nazwa placówki', type: 'string'},
    {name: 'slug', title: 'Adres podstrony', type: 'slug', options: {source: 'name'}},
    {name: 'city', title: 'Miasto / nazwa lokalizacji', type: 'string'},
    {name: 'status', title: 'Status', type: 'string', options: {list: [
      {title: 'Placówka działa', value: 'open'},
      {title: 'Otwarcie wkrótce', value: 'soon'}
    ]}},
    {name: 'address', title: 'Adres', type: 'string'},
    {name: 'description', title: 'Krótki opis', type: 'text'},
    {name: 'longDescription', title: 'Opis podstrony', type: 'text'},
    {name: 'phone', title: 'Telefon', type: 'string'},
    {name: 'hours', title: 'Godziny otwarcia', type: 'string'},
    {name: 'mapUrl', title: 'Link do mapy', type: 'url'},
    {name: 'photo', title: 'Zdjęcie główne', type: 'image', options: {hotspot: true}},
    {name: 'gallery', title: 'Galeria', type: 'array', of: [{type: 'image', options: {hotspot: true}}]}
  ]
}

export default {
  name: 'post',
  title: 'Aktualności',
  type: 'document',
  fields: [
    {name: 'title', title: 'Tytuł', type: 'string'},
    {name: 'publishedAt', title: 'Data publikacji', type: 'datetime'},
    {name: 'excerpt', title: 'Skrót', type: 'text'},
    {name: 'image', title: 'Zdjęcie', type: 'image', options: {hotspot: true}},
    {name: 'locations', title: 'Placówki', type: 'array', of: [{type: 'reference', to: [{type: 'location'}]}]},
    {name: 'body', title: 'Treść', type: 'array', of: [{type: 'block'}]}
  ]
}

document.querySelectorAll('.popup .close-button').forEach(b => {
  b.onclick = e => {
    const node = e.composedPath().find(n => n.classList.contains('popup'))
    if(node) node.classList.add('hidden')
  }
})

const body = document.body,
      map_b = document.querySelector('.map-button'),
      stat_b = document.querySelector('.stat-button')

map_b.onclick = () => {
  body.classList.remove('stat')
  body.classList.add('map')
  stat_b.classList.remove('active')
  map_b.classList.add('active')
}

stat_b.onclick = () => {
  body.classList.remove('map')
  body.classList.add('stat')
  map_b.classList.remove('active')
  stat_b.classList.add('active')
}
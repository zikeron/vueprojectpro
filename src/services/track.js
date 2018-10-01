import musicService from './music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  return musicService.get('/search', {
    params: { q, type }
  })
    .then(res => res.data)
}

trackService.getById = function (id) {
  return musicService.get(`/tracks/${id}`)
    .then(res => res.data)
}

export default trackService

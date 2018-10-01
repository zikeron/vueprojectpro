import Vue from 'vue'
import Vuex from 'vuex'
import trackService from '@/services/track'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    track: {}
  },

  getters: {
    trackTitle (state) {
      if (state.track.name) { return '' }
      return `${state.track.name} - ${state.track.artist[0].name}`
    }
  },

  mutations: {
    // le pasamos el Estado y el Payload
    setTrack (state, track) {
      state.track = track
    }
  },

  actions: {
    // Sirven para generar mutations de codigo asincronico como Promises
    getTrackById (context, payload) {
      return trackService.getById(payload.id)
        .then(res => {
          context.commit('setTrack', res)
          return res
        })
    }
  }
})

export default store

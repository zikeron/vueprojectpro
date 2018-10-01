const trackMixin = {
  methods: {
    selectTrack () {
      if (!this.track.preview_url) { return }

      this.$store.commit('setTrack', this.track)
      // Cambiamos $bus para usar el $store de Vuex
      // enviamos el evento hacia el objeto padre mediante el event$bus
      // this.$emit('select', this.track.id)
      // this.$bus.$emit('set-track', this.track)
    }
  }
}

export default trackMixin

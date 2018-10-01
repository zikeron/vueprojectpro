<template lang="pug">
  main
    transition(name="move")
      notification(v-show="showNotification")
        p(slot="body") No se encontraron resultados
    transition(name="move")
      lc-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav
        .container
          .columns
            input.input.is-large(
              type="text",
              placeholder="Buscar",
              v-model="searchQuery"
              @keyup.enter="search"
            )
            a.button.is-info.is-large(@click="search") Buscar
            a.button.is-danger.is-large &times;
      .container.encontrados
        p
          small {{ searchMessage }}

    .container.results
      .columns.is-multiline
        .column.is-one-quarter(v-for="t in tracks")
          lc-track(
            v-blur="t.preview_url"
            :class="{ 'is-active': t.id === selectedTrack }",
            :track = "t",
            @select="setSelectedTrack"
          )
</template>

<script>
import trackService from '@/services/track'
import LcTrack from '@/components/Track.vue'

import Notification from '@/components/shared/Notification.vue'
import LcLoader from '@/components/shared/Loader.vue'

export default {
  name: 'app',
  components: {
    LcTrack,
    LcLoader,
    Notification
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotification: false
    }
  },
  created () {
    console.log('created')
  },
  mounted () {
    console.log('mounted')
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }
      this.isLoading = true

      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="scss">
.encontrados{
  margin-top: 30px;
}
.results{
  margin-top: 50px;
}
.is-active {
  border: 3px #23d160 solid;
}
</style>

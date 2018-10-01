<template lang="pug">
  .content(v-if="track && track.album")
    p
      img(:src="track.album.images[0].url")
    p
      strong {{ track.name }} &nbsp;
      small [{{ track.duration_ms| ms-to-mm }}]
    p
      audio(controls, :src="track.preview_url")
</template>

<script>
import { mapState } from 'vuex'
export default {
  // Quitamos Data y created para usar una computed con el store de Vuex
  // data () {
  //   return {
  //     track: {}
  //   }
  // },
  // created () {
  //   this.$bus.$on('set-track', (track) => {
  //     this.track = track
  //   })
  // }
  computed: {
    ...mapState(['track'])
  }
}
</script>

<style lang="scss" scoped>
  img{
    width: 200px;
    border-radius: 100px;
  }
  audio{
    margin-top: 70px;
  }
</style>

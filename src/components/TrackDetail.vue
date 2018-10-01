<template lang="pug">
div
  transition(name="move")
    lc-loader(v-show="isLoading")
  .container(v-if="track && track.id")
    .columns
      .column.is-3.has-text-centered
        figure.media-left
          p.image
            img(:src="track.album.images[0].url")
          p.button-bar
            a.button.is-primary.is-large
              span.icon(@click="selectTrack") ▶️
      .column.is-8
        .panel
          .panel-heading
            h1.title {{ trackTitle }}
          .panel-block
            article.media
              .media-content
                ul(v-for="(v,k) in track")
                  li
                    strong {{ k }}:&nbsp;
                    span {{ v }}
              nav.level
                .level-left
                  a.level-item
      //- .column.is-5.is-offset-4
        //- pm-track(:track="track")
</template>

<script>
// import PmTrack from '@/components/Track.vue'
import { mapState, mapActions, mapGetters } from 'vuex'
// import trackService from '@/services/track'
import LcLoader from '@/components/shared/Loader.vue'
import trackMixin from '@/mixins/track'

export default {
  mixins: [ trackMixin ],

  components: { LcLoader },

  computed: {
    ...mapState(['track']),
    ...mapGetters(['trackTitle'])
  },
  // Quitamos la data por que usearemos el Store
  data () {
    return {
      isLoading: true
    }
  },
  created () {
    const id = this.$route.params.id

    if (!this.track || !this.track.id || this.track.id !== id) {
      this.getTrackById({ id })
        .then(() => {
          this.isLoading = false
          console.log('Track Loaded ...')
        })
    }
    //
    // trackService.getById(id)
    //   .then(res => {
    //     this.track = res
    //     this.isLoading = false
    //   })
  },

  methods: {
    ...mapActions(['getTrackById'])
  }
}
</script>

<style lang="scss" scoped>
  .columns {
    margin: 20px;
  }
  .button-bar {
    margin-top: 20px;
  }
</style>

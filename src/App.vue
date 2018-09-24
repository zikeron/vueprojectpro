<template lang="pug">
  #app
    img(src="./assets/logo.png")
    section.section
      nav.nav.has-shadow
        .container
          input.input.is-large(
            type="text",
            placeholder="Buscar",
            v-model="searchQuery"
          )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
          p
            small {{ searchMessage }}

    .container.results
      .columns
        .column(v-for="t in tracks") {{ t.name }} - {{ t.artist }}
    //- p(v-show="showValue") {{ value }}
    //- p(v-if="showValue") {{ value }}
    //- p(v-else-if="false") {{ 'Algo más' }}
    //- p(v-else) {{ 'lo ultimo' }}
    //- ul
    //-   li(v-for="i in items") {{ i }}
    //- input(v-model="name")
    //- button(@click="format") Format
    //- p {{ formattedName }}
    //- input(v-model="lastName")
    //- p {{ fullName }}
    //- a(:href="url") Link
    //- .field
    //-   label.label Fecha de nacimiento
    //-   .control
    //-     input.input(
    //-       v-model="birthday"
    //-       type="date"
    //-       )
    //- .columns
    //- p {{ age }}
</template>

<script>
const tracks = [
  { name: 'Muchacha', artist: 'Luis A Spinetta' },
  { name: 'Hoy aca en el baile', artist: 'El Pepo' },
  { name: 'I was made for loving you', artist: 'Kiss' }
]

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: []
      // msg: 'Hello world',
      // person: {
      //   name: 'Alejandro'
      // },
      // showValue: false,
      // value: 'Algo',
      // items: [ 1, 2, 3, 4, 5 ],
      // name: '',
      // lastName: '',
      // formattedName: '',
      // url: 'https://www.platzi.com',
      // birthday: ''
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
    // fullName () {
    //   return `${this.name} ${this.lastName}`
    // },
    // age () {
    //   return new Date(
    //     new Date() - new Date(this.birthday)
    //   ).getUTCFullYear() - 1970
    // }
  },
  // watch: {
  //   name (newVal, oldVal) {
  //     console.log(newVal, oldVal)
  //   }
  // },
  methods: {
    search () {
      this.tracks = tracks
    }
  //   format () {
  //     this.formattedName = this.name.split(' ').join('-').toUpperCase()
  //   }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';

results{
  margin-top: 50px;
}
</style>

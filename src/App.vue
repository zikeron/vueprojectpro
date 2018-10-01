<template lang="pug">
  #app
    .conteiner.has-text-centered
      img(src="./assets/logo.png")
    //- child
    //-   h1(slot="title") Titulo slot
    lc-header
    router-view
    lc-footer
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
    //- .<div class="columns">
    //- </div>
    //- p {{ age }}
</template>

<script>
import LcFooter from '@/components/layout/Footer.vue'
import LcHeader from '@/components/layout/Header.vue'

export default {
  name: 'app',
  components: {
    LcFooter,
    LcHeader
  }
}
// created () {
//   console.log('created')
// },
// mounted () {
//   console.log('mounted')
// },
// computed: {
//   fullName () {
//     return `${this.name} ${this.lastName}`
//   },
//   age () {
//     return new Date(
//       new Date() - new Date(this.birthday)
//     ).getUTCFullYear() - 1970
//   }
// },
// watch: {
//   name (newVal, oldVal) {
//     console.log(newVal, oldVal)
//   }
// },
// methods: {
//   format () {
//     this.formattedName = this.name.split(' ').join('-').toUpperCase()
//   }
</script>

<style lang="scss">
@import './scss/main.scss';

.results{
  margin-top: 50px;
}
.is-active {
  border: 3px #23d160 solid;
}
</style>

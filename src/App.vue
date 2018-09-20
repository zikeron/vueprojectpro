<template lang="pug">
  #app
    img(src="./assets/logo.png")
    //- p(v-show="showValue") {{ value }}
    //- p(v-if="showValue") {{ value }}
    //- p(v-else-if="false") {{ 'Algo más' }}
    //- p(v-else) {{ 'lo ultimo' }}
    //- ul
    //-   li(v-for="i in items") {{ i }}
    input(v-model="name")
    button(@click="format") Format
    p {{ formattedName }}
    input(v-model="lastName")
    p {{ fullName }}
    a(:href="url") Link
    .field
      label.label Fecha de nacimiento
      .control
        input.input(
          v-model="birthday"
          type="date"
          )
    .columns
    p {{ age }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello world',
      person: {
        name: 'Alejandro'
      },
      showValue: false,
      value: 'Algo',
      items: [ 1, 2, 3, 4, 5 ],
      name: '',
      lastName: '',
      formattedName: '',
      url: 'https://www.platzi.com',
      birthday: ''
    }
  },
  computed: {
    fullName () {
      return `${this.name} ${this.lastName}`
    },
    age () {
      return new Date(
        new Date() - new Date(this.birthday)
      ).getUTCFullYear() - 1970
    }
  },
  watch: {
    name (newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  },
  methods: {
    format () {
      this.formattedName = this.name.split(' ').join('-').toUpperCase()
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'
</style>

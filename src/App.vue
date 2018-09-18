<template lang="pug">
  #app
    img(src="./assets/logo.png")
    h1 {{ msg }}
    p {{ 1 + 1 }}
    p {{ 'hola' +  ' Mundo' }}
    p {{ person.name.toUpperCase() }}
    p {{ JSON.stringify(person) }}
    p {{ true ? 'true' : 'false' }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello world',
      person: {
        name: 'Alejandro'
      }
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'
</style>

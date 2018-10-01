<template lang="pug">
  div
    slot(name="title")
      h1 title
    local-component
</template>

<script>
  import LocalComponent from './LocalComponent.vue'

  export default {
    components: { LocalComponent }
  }
</script>

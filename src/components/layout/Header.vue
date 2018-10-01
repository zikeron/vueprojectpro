<template lang="pug">
  section.hero.is-info
    .hero-head
      header.nav
        .container
          .nav-left
            .navbar-item
              strong 📻 Vue Music
          .nav-right.nav-menu
            router-link.nav-item(:to="{name: 'search' }") Buscar 
            router-link.nav-item(to="about") Nosotros
    .hero-body
      .conteiner.has-text-centered
        h1.title Vue Project Music
        h2.subtitle Canciones que estan Vue-nisimas!
        player
</template>
<script>
import Player from '@/components/Player.vue'

export default {
  components: { Player }
}
</script>

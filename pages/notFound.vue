<template lang="pug">
  #notFound
      v-layout(column, align-center)
        v-card.elevation-12.pa-6(:class="{'mt-12': $vuetify.breakpoint.mdAndUp}", style="width: 100%; max-width: 1000px")
          h1 Página no encontrada
          .subtitle La página que estás buscando no existe
</template>
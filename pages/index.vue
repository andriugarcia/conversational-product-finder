<template lang="pug">
  #index
    v-layout(column, align-center)
      v-card.elevation-12.pa-6(:class="{'mt-12': $vuetify.breakpoint.mdAndUp}", style="width: 100%; max-width: 1000px")
        h1.mt-6 {{ page.title }}
        .subtitle {{page.description}}
        nuxt-content.mt-6(:document="page")
        h2 ¿Qué estás buscando?
        v-layout.mt-2(wrap)
          v-flex(xs6, md4)
            v-card.pa-6(outlined, hover, @click="$router.push({path: '/portatil'})")
              v-img(src="https://images-na.ssl-images-amazon.com/images/I/81GZihZC3dL._AC_SL1500_.jpg")
              .font-weight-light.mt-3 Encuentra tu <b>Portátil</b> Ideal
        
</template>

<script>
export default {
  async asyncData({ $content, redirect, params }) {
    let page;
    page = await $content("index").fetch();

    return {
      page
    };
  }
};
</script>

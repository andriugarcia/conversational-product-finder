<template lang="pug">
  v-card.pb-12.my-2(outlined, hover, @click="toAmazon(product.link)")
    .pa-4
      v-img(:src="product.image")
      .font-weight-light.mt-3 {{ product.name }}
      v-layout(justify-space-between)
        .font-weight-bold {{ product.Price }}€
        v-chip.font-weight-bold(v-if="product.tags.includes('Choice')", small, color="yellow darken-3") Recomendado
      v-layout(wrap)
        v-chip.font-weight-bold.mr-2.mt-2(v-for="(chip, c) in product.show", :key="c", x-small) {{chip}}
    v-btn.text-capitalize(color="red", tile, @click.stop="toYoutube(product)", block, depressed, small, style="position: absolute; bottom: 32px; left: 0; right: 0") 
      v-icon.mr-3(small) mdi-youtube
      span(style="letter-spacing: 0") Ver Review
    v-btn.text-capitalize(color="orange", tile, block, depressed, small, style="position: absolute; bottom: 0; left: 0; right: 0") 
      v-icon.mr-3(small) mdi-amazon
      span(style="letter-spacing: 0") Comprar en Amazon
</template>

<script>
export default {
  props: ["product"],
  methods: {
    toAmazon(link) {
      window.open(link);
    },
    toYoutube(product) {
      window.open(
        "https://www.youtube.com/results?search_query=" + product.name
      );
    }
  }
};
</script>
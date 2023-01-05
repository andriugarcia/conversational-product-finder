<template lang="pug">
  #test
    div(v-if="!isResult")
      v-layout(align-center)
        .ml-3.font-weight-light(style="font-size: 2em") {{ questions[actualTest].question }}
      .ml-4.subtitle {{ questions[actualTest].description }}
      component(:is="questions[actualTest].type", :question="questions[actualTest]", v-model="portatiles", @next="nextTest", transition="fade", transition-mode="out-in") 
    div(v-else)
      .font-weight-light(style="font-size: 2em") Te recomendamos estos Portátiles
      .subtitle Según los gustos que nos has indicado
      v-btn.mt-4.text-capitalize(text, @click="resetTest") Repetir Test
      v-layout.mt-4(wrap)
        v-flex.pa-1(xs6, md3, v-for="(el, i) in portatiles", :key="i")
          product(:product="el", style="height: 100%")
</template>

<script>
import questionsData from "../test/portatiles.json";
import portatilesData from "../products/portatiles.json";
import microfonosData from "../products/microfonos.json";
import question from "@/components/question.vue";
import range from "@/components/range.vue";
import images from "@/components/images.vue";
import product from "@/components/product.vue";

export default {
  components: {
    question,
    range,
    images,
    product
  },
  data() {
    return {
      isResult: false,
      actualTest: 0,
      questions: questionsData,
      portatiles: portatilesData
    };
  },
  methods: {
    nextTest(val) {
      console.log("EMITTED", val);
      if (val == -1) {
        this.isResult = true;
      } else {
        this.actualTest = val;
      }
    },
    resetTest() {
      this.actualTest = 0;
      this.isResult = false;
      this.portatiles = portatilesData;
    }
  }
};
</script>

<style>
.fade-transition {
  transition: opacity 1s ease;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}
</style>
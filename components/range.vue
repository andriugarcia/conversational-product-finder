<template lang="pug">
  #range
    div(v-if="value.length != 0")
      v-range-slider.py-12.my-12(thumb-label="always", color="betterblue", v-model="val", step="10", style="width: 100%;", :min="getMin()", :max="getMax()")
      v-btn(block, color="betterblue", dark, rounded, :disabled="value.length == 0", @click="selectOption()") Siguiente
    div(v-else)
      v-alert(type="error") No hemos encontrado portátiles con estas características
      v-btn(block, color="betterblue", dark, rounded, @click="repeat()") Repetir Test
      
</template>

<script>
export default {
  props: ["question", "value"],
  data() {
    return {
      left: this.getMin(),
      right: this.getMax(),
      val: [this.getMin(), this.getMax()]
    };
  },
  methods: {
    repeat() {
      location.reload();
    },
    getMin() {
      let min = 9007199254740991;

      this.value.forEach(el => {
        min = el.Price < min ? el.Price : min;
      });

      return min;
    },
    getMax() {
      let max = -9007199254740991;

      this.value.forEach(el => {
        max = el.Price > max ? el.Price : max;
      });

      return max;
    },
    selectOption() {
      if (this.val[0] > this.val[1]) {
        this.val[1] = [this.val[0], (this.val[0] = this.val[1])][0]; //SWAP
      }

      this.$emit(
        "input",
        this.value.filter(
          el => el.Price >= this.val[0] && el.Price <= this.val[1]
        )
      );

      this.$emit("next", this.question.next);
    }
  }
};
</script>
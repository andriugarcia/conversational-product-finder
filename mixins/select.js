let mixin = {
  methods: {
    selectOption(option) {
      let products = [...this.value]
      if (typeof option.moreThan != 'undefined' && option.moreThan != {}) {
        for (let key in option.moreThan) {
          products = products.filter(el => el[key] >= option.moreThan[key])
          this.$emit(
            "input",
            products
          );
        }
      }
      if (typeof option.contains != 'undefined' && option.contains != {}) {
        for (let key in option.contains) {
          products = products.filter(el => el.tags.includes(option.contains[key]))
          this.$emit(
            "input",
            products
          );
        }

      }
      if (typeof option.equals != 'undefined' && option.equals != {}) {
        for (let key in option.equals) {
          products = products.filter(el => el[key] == option.equals[key])
          this.$emit(
            "input",
            products
          );
        }

      }

      if (typeof option.equals != 'undefined' && option.equals != {}) {
        for (let key in option.equals) {
          products = products.filter(el => el[key] == option.equals[key])
          this.$emit(
            "input",
            products
          );
        }

      }


      if (typeof option.lessThan != 'undefined' && option.lessThan != {}) {
        for (let key in option.lessThan) {
          products = products.filter(el => el[key] <= option.lessThan[key])
          this.$emit(
            "input",
            products
          );
        }
      }

      if (typeof option.between != 'undefined' && option.between != {}) {
        for (let key in option.between) {
          products = products.filter(el => (el[key] >= option.between[key][0] && el[key] <= option.between[key][1]))
          this.$emit(
            "input",
            products
          );
        }
      }

      if (typeof option.orderByTag != 'undefined') {
        products = products.sort(function (first, second) {
          // Contain values first
          return (first.tags.includes(option.orderByTag) && second.tags.includes(option.orderByTag)) ? 0 : first.tags.includes(option.orderByTag) ? -1 : 1;
        })
        this.$emit(
          "input",
          products
        )
      }

      this.$emit("next", option.next);
    }
  }
}

export default mixin

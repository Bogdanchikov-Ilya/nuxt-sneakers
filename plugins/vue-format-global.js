// plugins/vue-format-global.js
import Vue from 'vue'

var mixin = {
  methods: {
    priceFormat: (price) => {
      if(price) {
        return price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
      }
    }
  }
}

Vue.mixin(mixin)

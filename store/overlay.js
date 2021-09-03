export const state = () => ({
  show: false,
  items: null,
  cartItems: []
})

export const mutations = {
  resetShow(state, payload) {
    state.show = payload
  },
  STORE_ITEMS(state, payload) {
    state.items = payload
  },
  ADD_CART_ITEMS(state, payload) {
    console.log('set')
    state.cartItems.push(payload)
    console.log(state.cartItems.length)
  }
}

export const actions = {
  async loadItems ({ commit }) {
    const items = await this.$axios.$get('https://612fa67a5fc50700175f16ba.mockapi.io/items')
    commit('STORE_ITEMS', items)
  }
}

export const getters = {
  getShow(state) {
    return state.show
  },
  getItems(state) {
    return state.items
  },
  getCartItems(state) {
    return state.cartItems
  },
  getTotalPrice(state) {
    let counter = 0
    state.cartItems.forEach((item) => {
      counter += item.price
    })
    counter.toString()
    return counter
  }
}

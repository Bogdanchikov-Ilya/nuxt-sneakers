export const state = () => ({
  show: false,
  items: null,
  indexArr: []
})

export const mutations = {
  resetShow(state, payload) {
    state.show = payload
  },
  STORE_ITEMS(state, payload) {
    state.items = payload
  },
  ADD_CART_ITEMS(state, index) {
    state.items[index].state.inCart = true
    console.log(state.items[index].state.inCart)
  },
  REMOVE_PRODUCT(state, index) {
    console.log('delete' + index)
    if(state.items) {
      let arr = state.items.filter(item => item.state.inCart == true)
      arr[index].state.inCart = false
    }
  },
  PUSH_TO_DESIRED(state, index) {
    if(state.items) {
      state.items[index].state.inDesired = true
      localStorage.setItem('desired', state.items)
      state.indexArr.push(index)
      localStorage.setItem('desired', JSON.stringify(state.indexArr))
    }
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
    return state.items.filter(item => item.state.inCart == true)
  },
  getDesiredItems (state) {
    let arr = []
    for (let i = 0; i < state.indexArr.length; i++) {
      console.log(state.items[state.indexArr[i]])
      arr.push(state.items[state.indexArr[i]])
    }
    return arr
  },
  getTotalPrice(state) {
    if(state.items) {
      let counter = 0
      let arr = state.items.filter(item => item.state.inCart == true)
      arr.forEach((item) => {
        counter += item.price
      })
      return counter.toString()
    }
  }
}

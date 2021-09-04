<template>
  <div class="card">
    <img :src="require(`../static/img/productds/` + item.imageURL)" alt="Мужские Кроссовки Nike Blazer Mid Suede">
    <p class="name">{{item.title}}</p>
    <div class="card-bottom">
      <div class="price">
        <span class="price-label">ЦЕНА:</span>
        <span class="summ">{{item.price}} руб</span>
      </div>
      <div class="add-button" :class="{'in-cart': item.state.inCart}" @click="pushProduct(item, index)">
        <img src="../static/img/plus.svg" v-if="!item.state.inCart" alt="Добавить в корзину">
        <img src="../static/img/accept.png" v-if="item.state.inCart" alt="Добавлено">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      inCart: false
    }
  },
  methods: {
    pushProduct(item, index) {
      console.log(item)
      if(item.state.inCart === false) {
        this.$store.commit('overlay/ADD_CART_ITEMS', index)
        this.$store.commit('overlay/resetShow', true)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/functions";

.card{
  transition: .2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: size(19, 1920);
  border-radius: size(40, 1920);
  width: size(210, 1920);
  height: size(260, 1920);
  border: 1px solid #F3F3F3;
  text-align: start;
  margin-bottom: size(20, 1920);
  img{
    width: size(133, 1920);
    height: size(112, 1920);
  }
  .name{
    margin-top: size(14, 1920);
    font-weight: normal;
    font-size: size(14, 1920);
    line-height: size(17, 1920);
    color: #000000;
  }
  .card-bottom{
    width: 100%;
    margin-top: size(11, 1920);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .price{
      display: flex;
      flex-direction: column;
      align-items: start;
      .price-label{
        font-style: normal;
        font-weight: 500;
        font-size: size(11, 1920);
        line-height: size(13, 1920);
        text-transform: uppercase;
        color: #BDBDBD;
      }
      .summ{
        font-weight: bold;
        font-size: size(14, 1920);
        line-height: size(17, 1920);
        color: #000000;
      }
    }

    .add-button{
      cursor: pointer;
      padding: size(10, 1920);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: size(8, 1920);
      border: 1px solid #F2F2F2;
      transition: .2s ease-in-out;
      img{
        width: size(14, 1920);
        height: size(14, 1920);
      }
      &:hover{
        transition: .2s ease-in-out;
        border: 1px solid #eeb27c;
      }
    }
  }
  &:hover{
    transition: .2s ease-in-out;
    margin-top: - size(14, 1920);
    border: 1px solid transparent;
    box-shadow: 0px 14px 30px rgba(0,0,0,0.05);
  }
}

.in-cart{
  background: rgb(137,240,156);
  background: linear-gradient(180deg, rgba(137,240,156,1) 0%, rgba(60,199,85,1) 100%);
}
</style>

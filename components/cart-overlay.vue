<template>
  <div class="overlay">
    <div class="drawer">
      <div class="overlay-header">
        <p class="title">Корзина</p>
        <div class="close-btn" @click="$store.commit('overlay/resetShow', false)">
          <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
          </svg>
        </div>
      </div>
      <div class="cart-content">
        <div class="null-cart" v-if="cartItems.length == 0">
          <img src="../static/img/box.png" alt="box">
          <p class="title">Корзина пустая</p>
          <p class="text">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
          <div class="button" @click="$store.commit('overlay/resetShow', false)">🠔 Вернуться назад</div>
        </div>
        <div class="filled-cart" v-if="cartItems.length !== 0">
          <cartProduct v-for="(item, index) in cartItems" :item="item" :index="index"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartProduct from "~/components/cart-product";
export default {
  components: {CartProduct},
  computed: {
    cartItems () {
      return this.$store.getters['overlay/getCartItems']
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/functions";

body{
  overflow: hidden !important;
}

.overlay{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 1;
}

.drawer{
  position: absolute;
  width: size(400, 1920);
  height: 100%;
  right: 0;
  background-color: white;
  box-shadow: -10px 4px 24px rgba(0,0,0, 0.1);
  padding: size(40, 1920);
}

.overlay-header{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title{
    font-weight: bold;
    font-size: size(24, 1920);
    line-height: size(29, 1920);
    color: #000000;
  }
}

.close-btn{
  cursor: pointer;
  padding: size(10, 1920);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: size(8, 1920);
  border: 1px solid #cbcbcb;
  svg{
    width: size(14, 1920);
    height: size(14, 1920);
    transform: rotate(45deg);
    fill: red !important;
  }
}

.cart-content{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .null-cart{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img{
      width: size(120, 1920);
    }
    .title{
      font-style: normal;
      font-weight: 600;
      font-size: size(22, 1920);
      line-height: size(27, 1920);
      color: #000000;
      margin-top: size(20, 1920);
    }
    .text{
      font-weight: normal;
      font-size: size(16, 1920);
      line-height: size(24, 1920);
      text-align: center;
      color: #000000;
      opacity: 0.4;
      margin-top: size(10, 1920);
    }
    .button{
      cursor: pointer;
      margin-top: size(40, 1920);
      background-color: #9DD458;
      border-radius: size(18, 1920);
      font-weight: 600;
      font-size: size(16, 1920);
      line-height: size(19, 1920);
      padding: size(20, 1920);
      text-align: center;
      color: #FFFFFF;
      transition: .1s ease-in;
      &:hover{
        transition: .1s ease-in;
        background-color: #b5e05f;
      }
      &:active{
        background-color: #c4e79b;
      }
    }
  }
}

.filled-cart{
  padding-top: size(35, 1920);
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
}
</style>

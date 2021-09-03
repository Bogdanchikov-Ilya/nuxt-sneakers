<template>
  <header>
    <div class="container">
      <nuxt-link to="/">
        <div class="logo">
          <img width="40" height="40" src="../static/img/logo.png" alt="Logotype" />
          <div>
            <h3 class="text-uppercase">nuxt Sneakers</h3>
            <p class="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </nuxt-link>
      <ul class="d-flex">
        <li class="mr-30 cu-p" @click="$store.commit('overlay/resetShow', true)">
          <nuxt-link to="/">
            <img width={18} height={18} src="../static/img/cart.svg" alt="Корзина" />
            <span>{{ totalPrice }} руб.</span>
          </nuxt-link>
        </li>
        <li class="mr-20 cu-p">
          <nuxt-link to="/favorites">
            <img width={18} height={18} src="../static/img/heart.svg" alt="Закладки" />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/orders">
            <img width={18} height={18} src="../static/img/user.svg" alt="Пользователь" />
          </nuxt-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    totalPrice() {
      return this.$store.getters['overlay/getTotalPrice']
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/functions";
header{
  padding: size(40, 1920) 0;
  border-bottom: 1px solid #EAEAEA;
  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.logo{
  display: flex;
  align-items: center;
  color: black;
  img{
    width: size(40, 1920);
    height: size(40, 1920);
    margin-right: size(10, 1920);
  }
  h3{
    font-weight: bold;
    font-size: size(20, 1920);
    line-height: size(24, 1920);
    text-transform: uppercase;
    color: #000000;
  }
  p{
    font-size: size(14,1920);
    line-height: size(17, 1920);
    color: #9D9D9D;
  }
}

ul{
  display: flex;
  align-items: center;
  li{
    a{
      display: flex;
      justify-content: center;
      img{
        width: size(20, 1920);
      }
    }
    span{
      font-weight: 600;
      font-size: size(14, 1920);
      line-height: size(17, 1920);
      color: #5C5C5C;
      margin-left: size(7, 1920);
    }
    display: flex;
    align-items: center;
    margin-left: size(25, 1920);
  }
}
</style>

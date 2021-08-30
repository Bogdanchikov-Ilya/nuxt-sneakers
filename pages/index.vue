<template>
  <div class="home">
    <cartOverlay :showOverlay="showOverlay" v-if="showOverlay"/>
    <div class="home-wrapper">
      <headerApp :showOverlay="showOverlay" @openOverlay="this.showOverlay = true"/>
      <div class="content">
        <div class="container">
          <div class="content-header">
            <p class="title">Все кроссовки</p>
            <search/>
          </div>
          <div class="cards">
            <product v-for="item of 14"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerApp from "@/components/header-app"
import search from "@/components/search"
import product from "@/components/product"
import cartOverlay from  "@/components/cart-overlay"

export default {
  computed:{headerApp, search, product},
  data () {
    return {
      showOverlay: true
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/functions";

.home{
  width: 100%;
  height: 100vw;
  background-color: #e7f6ff;
  padding-top: size(85, 1920);
}

.home-wrapper{
  margin: auto;
  width: size(1080, 1920);
  height: 100%;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04);
}

.content{
  padding-top: size(45, 1920);
}

.content-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title{
    font-weight: bold;
    font-size: size(32, 1920);
    line-height: size(39, 1920);
    color: #000000;
  }
}

.cards {
  cursor: pointer;
  padding-top: size(40, 1920);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
</style>

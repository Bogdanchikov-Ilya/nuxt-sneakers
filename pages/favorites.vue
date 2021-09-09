<template>
  <div class="home">
    <transition name="fade">
      <cartOverlay v-if="show"/>
    </transition>
    <div class="home-wrapper">
      <headerApp />
      <div class="content">
        <div class="container">
          <div class="content-header">
            <p class="title">Мои закладки</p>
          </div>
          <div class="content">
            <Product v-for="(item, index) in items" :item="item" :index="index"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "~/components/product";
export default {
  components: {Product},
  data () {
    return {
      showOverlay: true,
      arr: null,
      indexArr: null
    }
  },
  computed: {
    show () {
      return this.$store.getters['overlay/getShow']
    },
    items () {
      return this.$store.getters['overlay/getDesiredItems']
    },


  },
  created() {
    this.indexArr = JSON.parse(localStorage.getItem('desired'))
  },
  watch: {
    show: function () {
      if(this.show == true) {
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = "17px"
      } else {
        document.body.style.paddingRight = "0px"
        document.body.style.overflow = 'auto';
      }
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
  //@media (max-width: 1280px) {
  //  width: size(1080, 1280);
  //}
}

.content{
  padding-top: size(15, 1920);
}

.content-header{
  margin-top: size(30, 1920);
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

.content{
  display: flex;
  justify-content: space-between;
}



// v-if transition

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>

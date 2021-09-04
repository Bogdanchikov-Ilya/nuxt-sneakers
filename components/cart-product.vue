<template>
  <div class="card">
    <img :src="require(`../static/img/productds/` + item.imageURL)" alt="Мужские Кроссовки Nike Blazer Mid Suede">
    <div class="text">
      <p class="name">{{item.title}}</p>
      <div class="price">
        <span class="summ">{{item.price}} руб</span>
      </div>
    </div>
    <div class="delete-button" @click="removeProduct(index)">
      <img src="../static/img/plus.svg" alt="Добавить в корзину">
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
  methods: {
    removeProduct(index) {
      this.$store.commit('overlay/REMOVE_PRODUCT', index)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/functions";

.card{
  transition: .2s ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: size(19, 1920);
  border-radius: size(20, 1920);
  width: 100%;
  border: 1px solid #F3F3F3;
  border: 1px solid #F3F3F3;
  text-align: start;
  margin-bottom: size(20, 1920);
  transition: .5s ease-out;
  img{
    width: size(70, 1920);
  }
  .name{
    margin-top: size(14, 1920);
    font-weight: normal;
    font-size: size(14, 1920);
    line-height: size(17, 1920);
    color: #000000;
  }

  .text{
    margin-left: size(20, 1920);
    margin-right: size(20, 1920);
  }

  .price{
    display: flex;
    flex-direction: column;
    align-items: start;
    .summ{
      font-weight: bold;
      font-size: size(14, 1920);
      line-height: size(17, 1920);
      color: #000000;
    }
  }

  .delete-button{
    cursor: pointer;
    padding: size(8, 1920);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: size(8, 1920);
    border: 1px solid #aaaaaa;
    transition: .2s ease-in-out;
    img{
      width: size(11, 1920);
      height: size(11, 1920);
      transform: rotate(45deg);
    }
    &:hover{
      transition: .2s ease-in-out;
      border: 1px solid #fc0202;
    }
  }

  &:hover{
    transition: .17s ease-in-out;
    box-shadow: 0px 14px 30px rgba(0,0,0,0.05);
  }
}
</style>

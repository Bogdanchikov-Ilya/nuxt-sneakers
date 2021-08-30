<template>
  <div class="card">
    <img src="../static/img/productds/image.png" alt="Мужские Кроссовки Nike Blazer Mid Suede">
    <p class="name">Мужские Кроссовки Nike Blazer Mid Suede</p>
    <div class="card-bottom">
      <div class="price">
        <span class="price-label">ЦЕНА:</span>
        <span class="summ">12 999 руб</span>
      </div>
      <div class="add-button">
        <img src="../static/img/plus.svg" alt="Добавить в корзину">
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
      padding: size(10, 1920);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: size(8, 1920);
      border: 1px solid #F2F2F2;
      img{
        width: size(14, 1920);
        height: size(14, 1920);
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
</style>

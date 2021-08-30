<template>
  <div class="overlay">
    <div class="drawer">
      <div class="overlay-header">
        <p class="title">Главная</p>
        <div class="close-btn">Закрыть</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showOverlay']
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/functions";

.overlay{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 1;
}

.drawer{
  position: absolute;
  width: size(385, 1920);
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
  .close-btn{
    cursor: pointer;
  }
}
</style>

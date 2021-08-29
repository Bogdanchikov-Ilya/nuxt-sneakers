<template>
  <div class="home">
    <div class="home-wrapper">
      <div class="container">

      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
</style>

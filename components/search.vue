<template>
  <div class="search">
    <input type="text" placeholder="Поиск..." v-model="search">
  </div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      search: this.value
    }
  },
  watch: {
    search(val) {
      this.$emit('search', val);
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/functions";
.search{
  input{
    width: size(250, 1920);
    border-radius: 10px;
    border: 1px solid #F3F3F3;
    padding: size(10, 1920);
    font-size: size(14, 1920);
    line-height: size(17, 1920);
    &::placeholder{
      color: #C4C4C4;
    }
    &:focus{
      outline: none;
    }
  }
}
</style>

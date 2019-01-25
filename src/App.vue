<template>
  <div class="example">
    <img src="./assets/images/logo.png" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>

<style lang='scss' scoped>
.example {
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
  }
  a {
    color: green;
    transform: translate(10px, 50px)
  }
}
</style>

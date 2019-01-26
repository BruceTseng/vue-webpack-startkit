<template>
  <div class="example">
    <a href="">{{msg}}</a>
    <img src="./assets/images/logo.png" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.example {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  img {
    width: 300px;
    height: 300px;
  }
  a {
    color: green;
    transform: translate(10px, 50px)
  }
}
</style>

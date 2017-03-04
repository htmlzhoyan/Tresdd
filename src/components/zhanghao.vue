<template>
  <div class="hi">
    <h1>{{ msg }}</h1>
    <h2>账号</h2>
    
  </div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      msg: '账号中心'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

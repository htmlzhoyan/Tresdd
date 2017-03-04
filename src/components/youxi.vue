<template>
  <div class="hi">
    <h1>{{ msg }}</h1>
    <h2><router-link to="/youxi/youxi2">游戏币</router-link></h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '游戏币中心'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	a{
		color: #2C3E50;
	}
</style>

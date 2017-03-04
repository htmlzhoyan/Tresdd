<template>
  <header>
  	<div class="logo">
  		<img src="../assets/img/logo.png" />
  	</div>
  	<div class="input_right">
  		<form method="get">
  			<input type="text" placeholder="搜索游戏" />
  		</form>
  		<a href="#">
  			<img src="../assets/img/pc.png" />
  		</a>
  	</div>
  </header>
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
	header{
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: row nowrap;
		background: #666;
		position: relative;
		background: #F75E46;
		
	}
	.logo{		
		width: 30%;
		display: flex;
		justify-content: center;
	
	}
	.logo img{
		width: 80%;
		height: 35px;
	    display: block;		
  
	}
	.input_right{
		width: 80%;	
		height: 100%;
		display: inline-flex;
		align-items: center;
		justify-content: flex-end;
		
	}
	.input_right form{
		width: 80%;
		height:35px;
		border: 0;
		outline: none;
		
	}
	.input_right form input{
		width: 100%;
		height:35px;
		border: 0;
		outline: none;
		padding-left: 35px;
		box-sizing: border-box;
		font-size: 14px;
	    background: url(../assets/img/search4.png) 3% center no-repeat #fff;
	    background-size: 20px;
	}
	.input_right a{
		width: 20%;
		height: 100%;
		display: inherit;
		justify-content:center;
		
	}
	.input_right a img{
		height: 50px;
		width: 50px;
	}
</style>

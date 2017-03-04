<template>
  <div class="footer_bottom">
   	<ul>
   		<li v-for="list in lists">
   			<router-link to="/shou">{{list}}</route-link>
   		</li>
   	</ul>
   	
  </div>
</template>

<script>
export default {
  name: 'Hfoot',
  data () {
    return {
      lists:["主页","我要卖","代练","消息","我的"]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.footer_bottom{
		width: 100%;
		position: fixed;		
		bottom: 0;
	}
	.footer_bottom ul{
		width: 100%;
		height: 50px;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
			
	}
	.footer_bottom ul li{
		width: 20%;
		height: 100%;						
	}
	.footer_bottom ul a{
		width: 100%;
		height: 100%;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		font-weight: 700;
		color: #000000;
		font-size: 14px;					
	}
</style>


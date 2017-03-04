<template>
 	<div class="index-class">
 		<ul>
 			<li class="tap_left"><router-link to="/client">
 				<span></span>	
				<div>端游</div>
 			</router-link></li>
 			<li class="tap_right"><router-link to="/shou">
 				<span></span>	
				<div>手游</div>			
 			</router-link></li>
 		</ul>
 		<transition name='fade' mode='out-in'>
 		<router-view></router-view>	
 		</transition>
 		
 	</div>
</template>

<script>
export default {
  name: 'content',
  data () {
    return {
     
    }
  }
}
</script>
<style scoped>
	.index-class{
		width: 100%;		
		background: #fff;
		
	}
	.index-class ul{
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
		height: 52px;
		width: 100%;
	}
	.index-class ul li{
		height: 100%;
		width: 50%;	
	}
	.index-class ul a{
		width: 100%;
		height: 100%;
		display: inline-flex;		
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		border: 1px solid #e8e8e8;
		background: #F1F1F1;
		font-size: 14px;
	}
	.tap_left span{
		width: 20px;
		height: 20px;
		background: url(../assets/img/diannao-gray.png) center center no-repeat;
		background-size: 20px;
	}
	.tap_left div{
		margin-left: 10px;
	}
	.tap_right span{
		width: 20px;
		height: 20px;
		background: url(../assets/img/shouji-gray.png) center center no-repeat;
		background-size: 20px;
	}
	.tap_right div{
		margin-left: 10px;
	}
	.index-class .router-link-active{
		background: #fff;
		border-bottom: 0;
		height: 51px;
	}
	.tap_left .router-link-active span{
		background: url(../assets/img/diannao.png) center center no-repeat;
		background-size: 20px;
	}
	.tap_right .router-link-active span{
		background: url(../assets/img/shouji.png) center center no-repeat;
		background-size: 20px;
	}
	.index-class .router-link-active{
		background: #fff;
		border-bottom: 0;
		height: 51px;
	}
	.fade-enter-active{
		transition: 1s;
	}
	.fade-enter{
		transform: translateX(-358px);
	}
	.fade-leave-active{
		transform: translateX(358px);
	}
</style>
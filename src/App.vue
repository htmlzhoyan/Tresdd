<template>

  <div class="content">
 
  	<hello></hello>
    <ul class="top_lists">

    	<li><router-link to="/youxi"> 		
    		<span @click="show()"></span>
    		<div>游戏币</div>
    		</router-link>
    		
    	</li>
    	<li><router-link to="/zhanghao">
    		<span></span>
    		<div>账号</div>   		
    	</router-link></li>
    	<li><router-link to="/zhuangbei">
    		<span></span>
    		<div>装备</div> 
    		</router-link>
    	</li>
    	<li><router-link to="/new">
    		<span></span>
    		<div>代练</div> 
    	</router-link></li>
    	<li>
    		<router-link to="/chongzhi">
    		<span></span>
    		<div>手机充值</div> 	
    			
    	</router-link></li>

    </ul>
    
 	<tab></tab>
 	<Hfoot></Hfoot>
  	
     
  </div>
</template>

<script>
import Hello from './components/Hello'
import tab from './components/tab'
import Hfoot from './components/Hfoot'
export default {
  name: 'App',
   components: {
    Hello,
    tab,
    Hfoot
  },
  methods:{
  	show:function(){
  		console.log(this.render)
  	}
  }
}
</script>

<style>
/* CSS Document */
html, body, ul, li, ol, dl, dd, dt, p, h1, h2, h3, h4, h5, h6, form, fieldset, legend, img { margin:0; padding:0; }
fieldset, img { border:none; }
img{display: block;}
address, caption, cite, code, dfn, th, var { font-style:normal; font-weight:normal; }
ul, ol {list-style:none;}
body {color:#666;font:12px/20px "微软雅黑","SimSun","宋体","Arial Narrow",HELVETICA; background:#f1f1f1;/* overflow-y:scroll;*/ overflow-x:hidden;font-size: 12px}
a{ color:#666; text-decoration:none; }

.content{
	width: 100%;
}
.top_lists{
    display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	height: 120px;
	margin-bottom: 15px;
	background: #fff;
	box-sizing: border-box;
	border-bottom: 1px solid #e8e8e8;
}
.top_lists li{
	width: 25%;	
	list-style: none;	
	height: 100%;
	display: inline-flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;  			
}
.top_lists li span{
	width: 80%;
	height: 60%;
	display: block;
	background: url(assets/img/bi.png) center center no-repeat;
	background-size: 100%;
	
}
.top_lists li a{
	width: 100%;
	height: 100%;
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	font-size: 14px;
}
.top_lists li div{
	width: 80%;
	height: 15%;
	display: inline-flex;
	align-items: flex-start;
	justify-content: center;		
}
.top_lists li:nth-child(2) span{
	background-image: url(assets/img/hao.png);	
}
.top_lists li:nth-child(3) span{
	background-image: url(assets/img/zhuan.png);	
}
.top_lists li:nth-child(4) span{
	background-image: url(assets/img/lian.png);	
}
.top_lists li:nth-child(5) span{
	background-image: url(assets/img/shouyou.png);	
}

.router-link-active{
	color:#2C3E50
}



</style>

<template>
<div class="client_games">
 	<div class="client_games_left">
	<ul>
		<li v-for="item in lists">
			<a><img :src="item.img" /></a>	
			<p>{{item.name}}</p>
		</li>
		
	</ul>
 	</div>
 	<div class="client_games_right">
 		<p><span @click="show_top()" :class="{active_top:isActive}"></span></p>
 		<a v-for="(letter,index) in letters" @click="show(index)"  :class="{active:letter.isActive}">
 			{{letter.name}}
 		</a>
 		
 	</div>
</div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {    
	    lists:[
	        {img:require('../assets/img/dnf.jpg'),'name':'地下城与勇士'},
         	{img:require('../assets/img/jianxia.jpg'),'name':'剑侠情缘'},
         	{img:require('../assets/img/cf.jpg'),'name':'穿越火线'},
         	{img:require('../assets/img/6478067ad16248e39f4f6917226194c4.jpg'),'name':'天涯明月刀'},
         	{img:require('../assets/img/b1444385110f44f7af05a5266026965e.jpg'),'name':'魔兽世界'},
         	{img:require('../assets/img/1f3fb0bd12f748049f7b3e4d13c769ac.jpg'),'name':'英雄联盟'},
         	{img:require('../assets/img/68112738660c4051bba6a9de218948e3.jpg'),'name':'剑灵'},
         	{img:require('../assets/img/d48c65ab51c54544a202c95ddff67974.jpg'),'name':'新天龙八部'},
         	{img:require('../assets/img/0f9d2af1287640fcb799a5206e5e977a.jpg'),'name':'QQ三国'},
         	{img:require('../assets/img/c19637ecd26f45d7927fa0535810f87b.jpg'),'name':'征途'},
         	{img:require('../assets/img/7a3c26ae86844c348f03bc2aa011cc41.jpg'),'name':'守望先锋'},
         	{img:require('../assets/img/fab32a5374c3458a91471aba2f5b5162.jpg'),'name':'逆战'},
         	{img:require('../assets/img/11dffa387cb24be7b596863b14a6b0f5.jpg'),'name':'开心网001'},
         	
	    ],
	    isActive:true,
	    letters:[
	        {name:"A",'isActive':false},
     	 	{name:"B",'isActive':false},
         	{name:"C",'isActive':false},
 	 		{name:"D",'isActive':false},
     	 	{name:"E",'isActive':false},
     	 	{name:"F",'isActive':false},
         	 {name:"G",'isActive':false},
         	 {name:"H",'isActive':false},
     	 	{name:"I",'isActive':false},
         	 {name:"G",'isActive':false},
         	 {name:"K",'isActive':false},
     	 	{name:"L",'isActive':false},
         	 {name:"M",'isActive':false},
         	 {name:"N",'isActive':false},
     	 	{name:"O",'isActive':false},
         	 {name:"P",'isActive':false},
         	 {name:"Q",'isActive':false},
 	 		{name:"L",'isActive':false},
         	 {name:"S",'isActive':false},
         	 {name:"T",'isActive':false}, 
         	
	    ],
	    isActive:true
    }
  },
  methods:{
  	show_top:function(){
  		for(var i=0;i<this.letters.length;i++){
  			this.letters[i].isActive=false;	
  		} 
  		this.isActive=true
  	},
  	show:function(index){ 
  		this.isActive=false
  		for(var i=0;i<this.letters.length;i++){
  			this.letters[i].isActive=false;	
  		} 		
  		this.letters[index].isActive=true		
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.client_games{
		display: flex;
		flex-flow: row nowrap;
	}
	
	.client_games_left{
		width: 86%;
		
		padding-top: 15px;		
	}
	.client_games_left ul{
	    width: 100%;
	  
	    display: flex;
	    flex-flow: row wrap;
	    justify-content: flex-start;
	    align-content: flex-start;
	    background: #fff;	
	}
	.client_games_left ul li{
	    width: 33.33%;
	    height: 100px;
	    display: inline-flex;
	    background: #fff;
	    flex-flow: column;
	    justify-content: flex-start;
	    align-items: center;
	}
	.client_games_left ul li a{
		width: 100%;
		height: 70%;
		display: inline-flex;
		justify-content: center;
		
	}
	.client_games_left ul p{
		
		height: 20%;
		font-size: 12px;
		color: #000;			
		
	}
	.client_games_left ul li img{
		width: 60%;
		height: 100%;
		border-radius: 10%;
	}
	.client_games_right{
		width: 14%;
	
	}
	.client_games_right a{
		width: 100%;
		height: 50px;
		display: inline-flex;
		justify-content: center;
		background: #F1F1F1;
		align-items: center;
		font-size: 20px;
	}
	.client_games_right .active{
		background: #fff;
		color:#F75E46;
	}
	.client_games_right p{
		width: 100%;
		height: 50px;
		font-size: 20px;
		background: #F1F1F1;
	}
	.client_games_right p span{
		width: 100%;
		height: 100%;
		background: url(../assets/img/hot.png) center center no-repeat;
		background-size:20px;
		display: block;
	}
	.client_games_right p .active_top{
		background: url(../assets/img/hot2.png) center center no-repeat #fff;
		background-size:20px;
	}
</style>
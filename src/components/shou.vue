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
	        {img:require('../assets/img/d6bab930a4fe425a82456303f65a073d.jpg'),'name':'王者荣耀（手游）'},
         	{img:require('../assets/img/e2780de15cab4045b9aca15cabafbd1c.jpg'),'name':'梦幻西游（手游）'},
         	{img:require('../assets/img/2ef0f13216e241959708237db555b62c.jpg'),'name':'阴阳师（手游）'},
         	{img:require('../assets/img/c5f823288e704ffeafd64623b5d36ccf.jpg'),'name':'火线精英'},
         	{img:require('../assets/img/cf360fbf38364b6aaed79a6cedb4cbc8.jpg'),'name':'球球大作战'},
         	{img:require('../assets/img/eda7733bc7f940cdb11dafc2c1580d0d.jpg'),'name':'街篮'},
         	{img:require('../assets/img/9f2b2ce0363243b8b704c38f7cdae363.jpg'),'name':'倩女幽魂'},
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
<style scoped>
	
</style>

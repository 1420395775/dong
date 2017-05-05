

	window.onscroll=function(){
		var oNav=document.getElementById('naviGation');
		var oLeft1 = document.getElementById('leftMenu');
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		

		if(scrollTop>=700){
			Move(oNav,{top:0});
		}
		if(scrollTop<700){
			Move(oNav,{top:-52});
		}
		// 导航栏

		
		if(scrollTop>=1800){
			Move(oLeft1,{opacity:100});
		}
		if(scrollTop<1800){
			Move(oLeft1,{opacity:0});
		}
		//左侧导航栏
		console.log(oLeft1);
	}


	

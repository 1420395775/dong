	window.onload=function(){

		var oDiv = document.getElementById('lub');
		var aI=oDiv.getElementsByTagName('i');
		var oUl = oDiv.getElementsByTagName('ul')[0];
		var aLi2=oUl.getElementsByTagName('li');

		var oArw1 = document.getElementById('arrows_l');
		var oArw2 = document.getElementById('arrows_r');

		var now=0;

		for(var i=0;i<aI.length;i++){
			aI[i].index=i;
			aI[i].onmouseover=function(){
				now=this.index;				
				action();
				action2();
			}			
		}
	
		// 点 ol
		function action(){
			for(var i=0;i<aI.length;i++){
					aI[i].className='';
					Move(aLi2[i],{opacity:0});
				}
				aI[now].className='sp_one';
				Move(aLi2[now],{opacity:100});
		}
		
		//图 ul
		function action2(){
			for(var i=0;i<aLi2.length;i++){
				aLi2[i].className='';
				aLi2[i].style.opacity=0;
			}
			aLi2[now].className='lb1';
		}


		function next(){					
			now++;			
			if(now==aI.length){
				now=0;
			}
			action();
			action2();
		}		
		var timer=setInterval(next,4000);


		oDiv.onmouseover=function(){
			clearInterval(timer);
		}
		oDiv.onmouseout=function(){
			timer=setInterval(next,4000);
		}

		oArw2.onclick=function(){
			next();
		}

		oArw1.onclick=function(){
			now--;
			if(now<0){
				now=aLi2.length-1;
			}
			action();
		}

	}	


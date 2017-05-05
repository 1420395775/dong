
	window.onload = function () {
			var oHh = document.getElementById('hh');
			var oMm = document.getElementById('mm');
			var oSs = document.getElementById('ss');
			showTime();

			function ti(i){
				if (i<10){
						return '0'+i
					}else{
						return i;
					}
			}
			var timer=null;
			function showTime(){
				timer=setTimeout(showTime,1000);
				//获取系统时间
				var oDate = new Date();
				//获取当前时间
				var endtimer = new Date('2017/2/3,11:59:59');
				//转换毫秒，在/转秒数，取整
				var lefttime = parseInt((endtimer.getTime() - oDate.getTime())/1000);
				//转换天时间
				var d = parseInt(lefttime/(24*60*60));
				console.log(d)
				//小时
				var h = parseInt(lefttime/(60*60)%24);
				//分钟
				var mi = parseInt(lefttime/60%60);
				//秒
				var s = parseInt(lefttime%60);
				h=ti(h);
				mi=ti(mi);
				s=ti(s);

				 // alert(h);
				oHh.innerHTML= h;
				oMm.innerHTML= mi;
				oSs.innerHTML= s;

				if(lefttime<=0){
					clearTimeout(timer);
				}
				
			}


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
		
		var timer=setInterval(next,4000);


		oDiv.onmouseover=function(){
			clearInterval(timer);
		}
		oDiv.onmouseout=function(){
			timer=setInterval(next,4000);
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
		// 轮播图

		var oNot1 = document.getElementById('not1');
		var oCx = document.getElementById('cx');
		var oGg = document.getElementById('gg');
		
		var oMes1 = document.getElementById('message1');
		var oMes2 = document.getElementById('message2');
		var oLin = document.getElementById('linee');

		oCx.onmouseover = function () {
			oMes1.style.display = 'block';
			oMes2.style.display = 'none';
			Move(oLin,{left:0});

		}
		
		oGg.onmouseover = function () {
			oMes1.style.display = 'none';
			oMes2.style.display = 'block';
			Move(oLin,{left:46});
		}
		//公告部分


	}



		// var timer=null;
		function getStyle(obj,attr){
			if(obj.currentStyle){
			  	return obj.currentStyle[attr];
			}else{
				return getComputedStyle(obj,false)[attr]; 
			}
		}

		function Move(obj,json,fn){

			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				var stop=true;
				//json for in循环
				for(var attr in json){
					 var cur=0;
					 //判断如果是透明度就获取透明度样式，否则试用普通方法
					 if(attr=='opacity'){
					 	cur=Math.round(parseFloat(getStyle(obj,attr))*100);
					 }else{
					 	cur=parseInt(getStyle(obj,attr));
					 }
					//计算速度,上下取整
					var speed=(json[attr]-cur)/10;
					speed=speed>0?Math.ceil(speed):Math.floor(speed);

					//假设都没有到就为假，继续开始走完下面的,
					if(cur!=json[attr]){
						stop=false;
					} 
					//更改属性,获取动画效果
					if(attr=='opacity'){
						cur+=speed;
						obj.style.filter='alpha(opacity'+cur+')';
						obj.style[attr]=cur/100;
					}
					else{
						
						obj.style[attr]=cur+speed+'px';
					}
					//最后都到了,才关闭定时,再回调函数,停止检测
					if(stop){
						clearInterval(obj.timer);
						if(fn)fn();
					}
				}

			},30)
		}

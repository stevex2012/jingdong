window.onload=function(){
//header区域js交互--------------------------------------------------------------------------------
	//找到diqu--------------------
	var aDiqu=document.getElementsByClassName('diqu')[0];
	var aUl=aDiqu.getElementsByTagName('ul')[0];
	var aA=aUl.getElementsByTagName('a');
	var oL=aDiqu.getElementsByTagName('i')[0];
	var oStrong=aDiqu.getElementsByTagName('strong')[0];
	//划过diqu显示下面的ul
	aDiqu.onmouseover=function(){
		aUl.style.display='block';
		this.className='diqu-on diqu';
	};
	aDiqu.onmouseout=function(){
		aUl.style.display='none';
		this.className='diqu';		
	};
	//点击得到li的值给diqu---------------
	for(var i=0;i<aA.length;i++){
		aA[i].index=i;//发编号
		aA[i].onmouseover=function(){//鼠标划过diqu下面的a事件-------------------
			if(this.className==false){
				this.className='huaguoa';
			};
		};
		aA[i].onmouseout=function(){//鼠标离开diqu下面的a事件-------------------
			if(this.className=='ac'){
				this.className='ac';
			}else{
				this.className='';
			};
		};
		aA[i].onclick=function(){//绑定点击事件--给所有a帮上时间按--
			for(var j=0;j<aA.length;j++){
				aA[j].className='';
			};
			aA[this.index].className='ac';
			oStrong.innerHTML=this.innerHTML;//送值
			aUl.style.display='none';//点击确定地区后，就关闭选项----------------------------------------
		};
	};
	//找到header_nav 里面有子菜单-的li------------------------------------------------------
	var header_nav=document.getElementById('header_nav');
	var aLi=header_nav.getElementsByTagName('li');
	var Alla=header_nav.getElementsByTagName('a');//找到header-nav里面所有的a
	for(var i=0;i<aLi.length;i++){//个ul下面的每个li鼠标绑划过和移除事件
		//找到每一个li线面的a
		aLi[i].duixiang=i;
		aLi[i].onmouseover=function(){
			if(this.getElementsByTagName('div')[0]){
				this.className='active-bg active-bg-on';
				this.getElementsByTagName('div')[0].style.display='block';
			};
			//this.getElementsByTagName('a')[0].style.color='#c81623';//鼠标划过改变颜色----------		
		};
		aLi[i].onmouseout=function(){
			if(this.getElementsByTagName('div')[0]){
				this.className='active-bg';
				this.getElementsByTagName('div')[0].style.display='none';
			};
			//this.getElementsByTagName('a')[0].style.color='';//鼠标out改变颜色---------
		};
	};
	//给每一个a绑帮上事件=0--------------------------------------------------------------
	for(var j=0;j<Alla.length;j++){
		Alla[j].onmouseover=function(){
			this.style.color='#c81623';
			this.getElementsByTagName('i')[0].style.color='#666';
		};
		Alla[j].onmouseout=function(){
			this.style.color='';
			this.getElementsByTagName('i')[0].style.color='#666';
		};
	};
//banner右侧二级菜单交互js--------------------------------------------------------------------------------------------------
//找到id是banner_top_right_icon-----------------------------------------------------------------
	var banner_top_right_icon=document.getElementById('banner_top_right_icon');
	var banner_Icon_Ul=banner_top_right_icon.getElementsByTagName('ul')[0];//扎到第一个ul
	var banner_Icon_Ul_Li=banner_Icon_Ul.getElementsByTagName('li');//找到ul下面的li
	var banner_Icon_div=banner_top_right_icon.getElementsByTagName('div')[0];//扎到第一个div
	var tel_charge=banner_Icon_div.getElementsByClassName('tel_charge');//找到banner_Icon_div下面的4个tel_charge
	var banner_Icon_div_Dl=banner_Icon_div.getElementsByTagName('dl')[0];//找到找到banner_Icon_div下面的第一个dl
	var banner_Icon_div_Dd=banner_Icon_div_Dl.getElementsByTagName('dd');
	//让banner_Icon_div下面的dl黑tel_charge都display:none;------
	banner_Icon_div_Dl.style.display='none'
	//鼠标划过ul下面1到4个li的时候显示下面的子菜单-----------------
		for(var i=0;i<4;i++){
			banner_Icon_Ul_Li[i].index=i;
			banner_Icon_Ul_Li[i].onmouseover=function(){
				banner_Icon_div_Dl.style.display='block';
				for(var j=0;j<4;j++){
					banner_Icon_div_Dd[j].className='';
					tel_charge[j].style.display='none';
				};
				banner_Icon_div_Dd[this.index].className='ddac';
				tel_charge[this.index].style.display='block';
				hxsd_tools.move(banner_top_right_icon.children[0],{"top":0},500);
			};
		};
	for(var i=0;i<banner_Icon_div_Dd.length;i++){
		banner_Icon_div_Dd[i].className='';
		tel_charge[i].style.display='none';
		banner_Icon_div_Dd[i].index=i;
		tel_charge[i].index=i;
		banner_Icon_div_Dd[i].onmouseover=function(){
			for(var i=0;i<banner_Icon_div_Dd.length;i++){
				banner_Icon_div_Dd[i].className='';
				tel_charge[i].style.display='none';
			};
			this.className='ddac';
			tel_charge[this.index].style.display='block';
		};
		tel_charge[i].onmouseover=function(){
			for(var j=0;j<tel_charge.length;j++){
				tel_charge[j].style.display='none';
				banner_Icon_div_Dd[j].className='';
			};
			this.style.display='block';	
			banner_Icon_div_Dd[this.index].className='ddac';
			this.children[0].onclick=function(){
				hxsd_tools.move(banner_top_right_icon.children[0],{"top":209},500);	
			};
			this.children[0].onmouseenter=function(){
				this.style.background="#ddd";
			};
			this.children[0].onmouseleave=function(){
				this.style.background="";
			};
		};
	};
//楼层导航的显示和隐藏-------------------------------------------------------------------------------------------
	(function(){
		var f1=document.getElementById('f1');
		var floors_nav=document.getElementById('floors_nav');//所有的楼层导航-----------
		var aLi=floors_nav.getElementsByTagName('li');//所有li
		var allFloor=document.getElementsByClassName('floor');
		var change=null;
		//定义两个数组，------------------
		var floorTxt=['服装','美妆','手机','家电','数码','运动','居家','母婴','食品','图书','车品','服务'];
		var floorsNum=['1F','2F','3F','4F','5F','6F','7F','8F','9F','10F','11F','12F'];
		//滚动条滚动显示对应的楼层编号-------------------------
		function scrolling(){
			window.onscroll=function(){
			var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;//滚动条高度
			var windowHeight=document.documentElement.clientHeight;//窗口高度
			var floorsHeight=f1.offsetTop-scrollTop-windowHeight+200;//200为floor1上面的广告位置---------
			if(floorsHeight<0){
				aLi[0].children[0].innerHTML='服装';
				floors_nav.children[0].style.display='block';
				aLi[0].className='floor_nav_ac';
			}else{
				floors_nav.children[0].style.display='none';
			};
			//显示对应的楼诚--------
			for(var i=0;i<aLi.length;i++){
				var floorBot=allFloor[i].offsetTop+allFloor[i].offsetHeight-scrollTop-windowHeight/2;
				if(floorBot<allFloor[i].offsetHeight && floorBot>0){//屏幕中心线在楼层里面的时候，显示对应楼层-----
					aLi[i].children[0].innerHTML=floorTxt[i];
						aLi[i].className='floor_nav_ac';
						aLi[i].change=true;
					}else{
						aLi[i].change=false;
						aLi[i].className='floor_nav_ac1';
						aLi[i].children[0].innerHTML=floorsNum[i];
					};
					};
				}
			};
		scrolling();
		//点击编号，跳转到相对楼层-----------------------------------------------
			for(var i=0; i<aLi.length; i++){
				aLi[i].index=i;
				aLi[i].onclick=function(){
					var start=document.documentElement.scrollTop || document.body.scrollTop;
					var end=allFloor[this.index].offsetTop;
					move(start,end);
					for(var j=0;j<aLi.length;j++){
						aLi[j].children[0].innerHTML=floorsNum[j];
						aLi[j].className='floor_nav_ac1';
						aLi[j].change=false;
					};
					this.change=true;
				};
				aLi[i].onmouseenter=function(){
					this.className='floor_nav_ac2';
					this.children[0].innerHTML=floorTxt[this.index];
				};
				aLi[i].onmouseleave=function(){
					for(var k=0;k<aLi.length;k++){
						if(aLi[k].change==true){
							aLi[k].className='floor_nav_ac';
							aLi[k].children[0].innerHTML=floorTxt[k];
						}else{
							aLi[k].className='floor_nav_ac1';
							aLi[k].children[0].innerHTML=floorsNum[k];
						};
					};
				};
			};
	//move-------------------------------------------------------
		var timer;
		function move(start,end){
			var dis=end-start;
			var count=parseInt(1500/30);
			var n=0;
			clearInterval(timer);
			timer=setInterval(function(){
				n++;
				var a=1-n/count;
				var step_dis=start+dis*(1-a*a*a*a);
				window.scrollTo(0,step_dis);
				if(n==count){
					clearInterval(timer);
				};
			},30)
		};
	})();
//banner区域鼠标划过allListMenu，，显示对应的右侧隐藏菜单-------------------------------------------------------------------------------
	(function(){
		var allListMenu=document.getElementById('allListMenu');
		var aDiv=allListMenu.children;//找到allListMenu下面的装左侧菜单和右侧菜单的两个盒子--
		var aLi=aDiv[0].getElementsByTagName('li');
		var aSection=aDiv[1].children;
		//干掉li的class----------------
		function remove_li_class(){
			for(var i=0;i<aLi.length;i++){
				aLi[i].className='';
			};
		};
		//鼠标划过左侧的li，，，，右侧显示对应的section-------------------
		allListMenu.onmouseenter=function(){
			//aDiv[1].style.display='block';
			for(var i=0;i<aLi.length;i++){
				aLi[i].index=i;
				aLi[i].onmouseenter=function(){
					remove_li_class();
					this.className='leftac';
					aDiv[1].style.display='block';	
				for(var j=0;j<aSection.length;j++){
					aSection[j].style.display='none';
				};
				aSection[this.index].style.display='block';
			};	
		};
		allListMenu.onmouseleave=function(){
			aDiv[1].style.display='none';
			remove_li_class();
			aDiv[1].style.display='none';		
		};
	};
	})();
//banner区域轮播图片js代码----------------------------------------------------------------------------------------------
	(function(){
		var sliderBanner=document.getElementById('sliderBanner');
		var preBtn=sliderBanner.children[0];//←按钮	
		var nextBtn=sliderBanner.children[1];	//→按钮
		var oUl=sliderBanner.getElementsByTagName('ul')[0];
		var aLi=oUl.children;
		preBtn.style.display=nextBtn.style.display='none';
		var n=0;//记录当前的索引值----------------
		var timer=null;//设置定时器，实现轮播----
		//创建按钮--------------------------------
		var ol=document.createElement('ol');
		for(var i=0;i<aLi.length;i++){
			ol.innerHTML+='<li>'+(i+1)+'</li>';
		};	
		sliderBanner.appendChild(ol);
		ol.style.marginLeft=-ol.offsetWidth/2+'px';
		var aBtn=ol.children;
		aBtn[0].className='ac';
		aLi[0].style.opacity=1;
		//定义一个淡出淡入函数，实现图片的淡出淡入
		function dis_none(a,b){
			aLi[a].style.display='block';
			aLi[a].style.opacity=1;
			
			aLi[b].style.display='block';
			aLi[b].style.opacity=0;
			hxsd_tools.move(aLi[a],{"opacity":0},1000);//淡出
			hxsd_tools.move(aLi[b],{"opacity":100},1000,function(){//淡入
				aLi[a].style.display='none';	
			});
		};
		//定义消除class函数
		function changeac(n){
			for(var i=0;i<aBtn.length;i++){
				aBtn[i].className='';
			};
			aBtn[n].className='ac';
		};
		//先实现鼠标划过li切换图片------
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].index=i;
			aBtn[i].onmouseover=function(){
				if(n!=this.index){
					dis_none(n,this.index);
					n=this.index;
					changeac(n);
				};
			};
		};
		//点击实现左右图片切换===
		sliderBanner.onmouseenter=function(){
			clearInterval(timer);
			preBtn.style.display=nextBtn.style.display='block';
			preBtn.onclick=function(){
				if(n==0){
					dis_none(n,aLi.length-1);
					n=aLi.length-1;
				}else{
					dis_none(n,n-1);
					n--;
				};
				changeac(n);
			};
			nextBtn.onclick=function(){
				if(n==aLi.length-1){
					dis_none(n,0);
					n=0;
				}else{
					dis_none(n,n+1);
					n++;	
				};
				changeac(n);
			};
		};
		sliderBanner.onmouseleave=function(){
			piclunbo();
			preBtn.style.display=nextBtn.style.display='none';
		};
		piclunbo();
	//设置一个定时让图片自动轮播----------------------------------------------------
	function piclunbo(){
		timer=setInterval(function(){
			if(n==aLi.length-1){
				dis_none(n,0);
				n=0;
				changeac(n);		
			}else{
				dis_none(n,n+1);
				n++;
				changeac(n);		
			};
		},2500);	
	};
	})();
/*floor1 右侧二级菜单----------------------------------------------------------------*/
	//封装一个二级菜单函数
	function foorMenu(id1,id2){
		var f1RightMenu=document.getElementById(id1);//楼层二级菜单ul
		var f1RigthbotMenu=document.getElementById(id2);//楼层二级菜单ul下面的大盒子---------
		var aLi=f1RightMenu.children;
		var aSection=f1RigthbotMenu.children;
		aSection[0].style.display='block';
		aLi[0].className='ac';
		//鼠标划过二级菜单，显示对应下面的div--------------------------
		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].onmouseenter=function(){
				for(var j=0;j<aLi.length;j++){
					aLi[j].className='';
					aSection[j].style.display='none';
				};	
				this.className='ac';
				aSection[this.index].style.display='block'
			};
		};
	};
	foorMenu('f1RightMenu','f1RigthbotMenu');
/*floor2 右侧二级菜单----------------------------------------------------------------*/
	foorMenu('f2RightMenu','f2RightBotMenu');
};






















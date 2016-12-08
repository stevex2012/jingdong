// JavaScript Document
window.onload=function(){
//找到diqu----------------------------------------------------------------------
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
	//放大镜部分---------------------------------------------------------------------。
	var mainImgList=document.getElementById('mainImgList');
	var main_bottom_left=mainImgList.getElementsByClassName('main_bottom_left')[0];
	var m_img=main_bottom_left.getElementsByClassName('m_img')[0];
	var midImg=m_img.getElementsByTagName('img')[0];//找到中图片
	var l_img=main_bottom_left.getElementsByClassName('l_img')[0];
	var bigImg=l_img.getElementsByTagName('img')[0];//找到大号图片
	var oUl=main_bottom_left.getElementsByTagName('ul')[0];//找到里面放图片的ul
	var aLi=oUl.getElementsByTagName('li');//找到放小图片的所有li
	//鼠标划过划过每个li的时候给ac，并且改变把bigImg其换成对应的图片------
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;//发编号
		aLi[i].onmouseenter=function(){
			for(var j=0;j<aLi.length;j++){
				aLi[j].className='';
			};
			this.className='ac';
			//把对应的图片传给bigImg和midImg-------------
			m_img.innerHTML=this.innerHTML+'<span></span>';
			l_img.innerHTML=this.innerHTML
		};
	};
	//鼠标enter midImg显示span，移动span实现放大镜效果---
	m_img.onmouseenter=function(){
		var oSpan=m_img.getElementsByTagName('span')[0];//找到放大镜------
		oSpan.style.display='block';
		l_img.style.display='block';
		document.onmousemove=function(ev){
			ev=ev||window.event;
			//获取鼠标坐标值
			var scroToll=document.documentElement.scrollTop||document.body.scrollTop;
			var x=ev.clientX-main_bottom_left.offsetLeft-m_img.offsetLeft-oSpan.offsetWidth/2;
			var y=ev.clientY+scroToll-main_bottom_left.offsetTop-m_img.offsetTop-oSpan.offsetHeight/2;
			//限制span的移动范围------------------
			if(x<0){
				x=0;
			};
			if(y<0){
				y=0;
			};
			if(x>(m_img.offsetWidth-oSpan.offsetWidth)){
				x=m_img.offsetWidth-oSpan.offsetWidth;
			};
			if(y>(m_img.offsetHeight-oSpan.offsetHeight)){
				y=m_img.offsetHeight-oSpan.offsetHeight
			};
			//算出中号图片移动的rate-----
			var rateX=x/(m_img.offsetWidth-oSpan.offsetWidth);
			var rateY=y/(m_img.offsetHeight-oSpan.offsetHeight);
			//确定大图片的移动范围---------------
			var bigImg=l_img.getElementsByTagName('img')[0];//找到不同的大号图片
			bigImg.style.left=-rateX*(bigImg.offsetWidth-l_img.offsetWidth)+'px';
			bigImg.style.top=-rateY*(bigImg.offsetHeight-l_img.offsetHeight)+'px';
			oSpan.style.left=x+'px';	
			oSpan.style.top=y+'px';	
		};
	};
	m_img.onmouseleave=function(){//鼠标离开,清除move事件
		var oSpan=m_img.getElementsByTagName('span')[0];//找到放大镜------
		oSpan.style.display='none';
		l_img.style.display='none';
		document.onmousemove=null;
	};
	//如果ul里面的图片超过了包容ul的里面类容的宽度，那么就可以点击左右的箭头，移动ul的left
	var pre=main_bottom_left.getElementsByClassName('pre')[0];
	var next=main_bottom_left.getElementsByClassName('next')[0];
	var s_img_box=main_bottom_left.getElementsByClassName('s_img_box')[0];
	oUl.style.width=aLi.length*(aLi[0].offsetWidth+6)+'px';
	//判断ul的宽度，如果ul的宽度大于s_img_box那么s_img_box的箭头才有点击功能
	(function(){//设置一个自运行函数----------------------
		var n=0;//设置计数器，，记录点击次数----
		if(oUl.offsetWidth>s_img_box.offsetWidth){
		next.onclick=function(){//点击右边箭头，
			//限制ul移动的距离---  -parseInt(oUl.style.left  oUl.offsetWidth-s_img_box.offsetWidth)
			if(n==(oUl.offsetWidth-s_img_box.offsetWidth)/(aLi[0].offsetWidth+6)){
				return false;
			}else{
				n++;
				hxsd_tools.move(oUl,{"left":(-aLi[0].offsetWidth-6)*n},500);
			};
		};
		pre.onclick=function(){
			if(n==0){
				return false;
			}else{
				n--;
				hxsd_tools.move(oUl,{"left":(-aLi[0].offsetWidth-6)*n},500);
			};
		};
	};	
	})();
	//main_bottom_middle------鼠标划过，，，，购买选项款的js------------------------------------------------------------
	(function(){
		//	
		var oUl=mainImgList.children[1].getElementsByTagName('ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		//鼠标overli事件---------------------
		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].onmouseover=function(){//over事件
				//判断这个是不是有了ac
				for(var j=0;j<aLi.length;j++){
					if(aLi[j].className=='ac'){
						continue;
					};
					aLi[j].className='';
				};
				this.className='ac';
			};
			aLi[i].onmouseout=function(){//out事件
				if(this.children[0].className=='bg'){//如果这个是点击了的那么就不取消他的ac
					return false;
				}else{
					this.className='';	
				};
			};
			//onclick事件-----------------
			aLi[i].onclick=function(){
				for(var k=0;k<aLi.length;k++){
					aLi[k].className='';
					aLi[k].children[0].className='';
				};
				this.className='ac';
				this.children[0].className='bg';
			};
		};
		//购买地区-------------------------
		var sendLocation=document.getElementById('sendLocation');
		var em=sendLocation.getElementsByTagName('em')[0];
		var oDiv=sendLocation.getElementsByTagName('div')[0];
		var aB=oDiv.children;
		//鼠标entersendLocation。事件
		sendLocation.onmouseenter=function(){
			oDiv.style.display='block';	
		};
		sendLocation.onmouseleave=function(){
			oDiv.style.display='none';
			for(var j=0;j<aB.length;j++){
				aB[j].className='';
			};
		};
		for(var k=0;k<aB.length;k++){
			aB[k].index=k;
			aB[k].onmouseenter=function(){
				for(var j=0;j<aB.length;j++){
					aB[j].className='';
				};
				this.className='ac'
			};
			//点击选择内容关oDiv
			aB[k].onclick=function(){
				em.innerHTML=this.innerHTML;
				oDiv.style.display='none';	
			};
		};
		//购买数量多少的点击按钮交互----------------------------------------------------
		var ol=mainImgList.children[1].getElementsByTagName('ol')[0];
		var input=ol.children[0].getElementsByTagName('input')[0];;
		var aBtn=ol.getElementsByTagName('span');
		var n=null;//记录购买按钮的点击次数---------------
		//点击btn事件，，，增加li的innnerHTML00
		aBtn[0].onclick=function(){
			n=input.value;
			n++;
			input.value=n;	
		};
		aBtn[1].onclick=function(){
			n=input.value;
			if(n==1){
				return false;
			}else{
				n--;
				input.value=n;		
			};
		};
	})();
	//main_bottom_right联系买件动画
	(function(){
		var i=mainImgList.children[2].getElementsByTagName('ul')[0].getElementsByTagName('i')[0];
		//利用定时器波动background-position的位置
		var n=0;
		setInterval(function(){
			n++;
			if(n==2){
				n=0;
				i.style.backgroundPosition='0 5px';
			}else{
				i.style.backgroundPosition='0 7px';
			};
		},500);
	})();
	//详情页选项卡js----------------------------------------------
	(function(){
		var tab=document.getElementById('tab');		
		var oUl=tab.children[0];
		var aLi=oUl.children;
		var oOl=tab.getElementsByTagName('ol');
		//点击切换选显卡
		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].onclick=function(){
				for(var j=0;j<aLi.length;j++){
					aLi[j].className='';
					oOl[j].style.display='none';
				};
				this.className='ac';
				oOl[this.index].style.display='block';	
			};
		};
	})();
};















































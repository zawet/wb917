define(function (require, exports) { //dedine闭包  
	var loads=require("./load");//加载机制引用
	var funs=require("./jlfunction");//函数导入
	var lrdata=require("./lrData");//获取模拟数据
	var config=require("./Config");//获取配置项（图片地址和异步地址）

	
	var iHeight = 30; //单行高度，像素 
	var iSAmount = 1; //每次滚动高度，像素 
	
exports.jl = function () {
	loads.startPreload(config.loadimg,function(){
		//加载图片
		$(".loadprogress").fadeOut(200);
		for (var key in loads.preload._loadItemsById) {
            $("." + key).html(loads.preload.getResult(key));
		}
		loads.pageimg($(".page"), 1920, 1080);


		leftDraw(lrdata.leftData)//左边渲染
		minDraw(lrdata.minData,config.congestion)//中间渲染
		rightDraw(lrdata.rightData)//右边渲染
		
		scale()
		gun('l0',3)
		gun('l1',3)
		gun('l2',3)
		gun('l3',3)
		


		//浏览器窗户变化时
		window.onresize = function () {
			loads.pageimg($(".page"), 1920, 1080);
			scale()
		}
		//摄像头点击后
		$(".cameras").click(function(){
			console.log("我是摄像头："+$(this).index());
			$(".videobox").slideDown(200);
		});
		$(".videoclose").click(function(){
			$(".videobox").slideUp(200);
		})
		
	})
}

 function scale(){
	var wh=$(window).height()
		var fbh=window.screen.height
		//console.log(wh,fbh,wh/fbh);
		$(".jlbox").css({"transform":"scale("+wh/fbh+")","margin-top":'-'+Math.floor(wh*((1-(wh/fbh))/2))+"px"})
 }

 

 function gun(id,iCount){
	var om= document.getElementById(id)
		function runs() {
			om.scrollTop += iSAmount;
			if ( om.scrollTop == iCount * iHeight ) om.scrollTop = 0;
			
			if ( om.scrollTop % iHeight == 0 ) {
				setTimeout( function(){runs()},30 );
			} else {
				setTimeout( function(){runs()}, 30 );
			}
		}
		om.innerHTML += om.innerHTML;
		setTimeout(function(){runs()},1)
 }

	
	
	
 
function leftDraw(data){
	//渲染左边dom和数据
	$(".lr-cadr.left").html("");
	for(var i=0;i<data.length;i++){
		$("#leftMouble").find(".tit").html(data[i].txitle);
		$("#leftMouble .lr-box .lr-left-ul").html("").attr('id','')
		for( var j=0;j<data[i].data.length;j++){
			//if(j<3){
				if(i==3){
					$("#listMouble .lr-carInfo-list").addClass("yichang")
					$("#listMouble .infoTxt span").eq(0).html(data[i].data[j].address)
					$("#listMouble .infoTxt span").eq(1).html(data[i].data[j].info).addClass('ml10')
					$("#listMouble .crossing").html(data[i].data[j].crossing)
				}else{
					$("#listMouble .infoTxt span").eq(0).html(data[i].data[j].carNumber)
					$("#listMouble .infoTxt span").eq(1).html(data[i].data[j].time)
					$("#listMouble .crossing").html(data[i].data[j].crossing)
				}
				$("#leftMouble .lr-box .lr-left-ul").append($("#listMouble").html()).attr('id','l'+i)
			//}
		}
		$(".lr-cadr.left").append($("#leftMouble").html());
	}
}

function minDraw(data,cf){
	numAN(data.allCarNumber,$(".lr-databox .lr-datalist").eq(0))
	numAN(data.total,$(".lr-databox .lr-datalist").eq(1))

	$(".cameras-box").html("");
	for(var ca=0;ca<data.cameras.length;ca++){
		$("#cameraMouble .cameras-info label").html(data.cameras[ca].name)
		$("#cameraMouble .cameras-info span").html("车流量:"+data.cameras[ca].carNum)
		if(data.cameras[ca].congestion>((cf.max-cf.min)/2))
		$("#cameraMouble .cameras-info b").addClass("mang")
		else
		$("#cameraMouble .cameras-info b").removeClass("mang")
		$("#cameraMouble .cameras").css({"top":data.cameras[ca].y+"%","left":data.cameras[ca].x+"%"})
		$(".cameras-box").append($("#cameraMouble").html());
	}

	var huandeg=data.congestion* (180/(cf.max-cf.min))
	$(".huanBox").css("transform","rotateZ("+huandeg+"deg)")
	$(".thisNum").html(data.congestion)

	$(".item-carP").html(data.carP);
	$(".item-carCount").html(data.carCount);
}

function spileData(int,drwaID){//分割数据变成一个个的
	var acn=toArray(int);
	drwaID.find(".dataTxt").html("")
	for( var ks=0;ks<acn.length;ks++){
		if(ks%3==0&&ks!=acn.length-1)
		drwaID.find(".dataTxt").append("<span>"+acn[ks]+"</span><b>,</b>")
		else
		drwaID.find(".dataTxt").append("<span>"+acn[ks]+"</span>")
	}	
}
function numAN(int,drawID){
	var sn=0;
	var s=setInterval(function(){
		sn=sn+Math.floor(int*0.01)
		if(sn>int){
			sn=int
			clearInterval(s)
		}
		spileData(sn,drawID)
	},30)
}

function toArray(str){//把字符串变成数组
	var ka=[];
	var kk=String(str)
	for(var k=0;k<kk.length;k++){
		ka.push(kk.substring(k,k+1))
	}
	return ka
}

function rightDraw(data){
	funs.echartsLine("lr-price",data.price);
	funs.echartsLine3("lr-carFlow",data.carFlow);
	funs.echartsBar("lr-carType",data.carType);
}








	

});
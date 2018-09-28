

define(function(require,exports) {//dedine闭包

exports.htmlajax=function(url,sucfun){
		var urlhtml="";
		$.ajax({
		  url: url,
		  cache: false,
		  success: function(html){
			 sucfun(html);
		  }
		});	
}
exports.getUrl=function(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) return unescape(r[2]); return null; 
}
exports.isNull=function (data){ 
    	return (data == "" || data == undefined || data == null) ? "kong" : data; 
}
	
 exports.echartsLine=function(id,datas){
	var labels = new Array();
	var values = new Array();
	for(var key in datas.data){
		labels.push(key);
		values.push(datas.data[key]);
	}
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var myChart = echarts.init(document.getElementById(id));
		option = {
			tooltip : {
				trigger: 'axis',
				axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			grid: {
				top:'5%',
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			yAxis:  {
				type: 'value',
				axisLabel:{textStyle:{color:'#b1f5f5'}},
				axisTick:{show:false,lineStyle:{color:'#b1f5f5'}},
				axisLine:{lineStyle:{color:'#b1f5f5'}},
				splitLine:{show:false}
			},
			xAxis: {
				type: 'category',
				boundaryGap : false,
				splitLine:{show:false},
				axisTick:{lineStyle:{color:'#b1f5f5'},alignWithLabel:true},
				axisLabel:{textStyle:{color:'#b1f5f5'}},
				axisLine:{lineStyle:{color:'#b1f5f5'}},
				data:labels
			},
			series: [
				{
					name: datas.tit,
					type: 'line',
					barWidth:'60%',
					smooth:true,
					areaStyle: {color:'rgba(0,254,254,0.2)'},
					itemStyle:{normal:{color:'#00fefe'}},
					data: values
				}
			]
		};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}

exports.echartsLine3=function(id,datas){
	var labels = new Array();
	var values =[[],[],[]];
	var colors=[['#00fefe','rgba(0,254,254,0.3)'],['#5ea3d7','rgba(94,163,215,0.3)'],['#cac1dd',' rgba(202,193,221,0.3)']]
	var _series=[]
	for(var i=0;i<datas.length;i++){
		for(var key in datas[i].data){
			if(i==0)labels.push(key);
			values[i].push(datas[i].data[key]);
		}
		var ktem={
			name: datas[i].tit,
			type: 'line',
			barWidth:'60%',
			smooth:true,
			areaStyle: {color:colors[i][1]},
			itemStyle:{normal:{color:colors[i][0]}},
			data: values[i]
		}
		_series.push(ktem)
	}
	console.log(_series);

	
	
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var myChart = echarts.init(document.getElementById(id));
		option = {
			tooltip : {
				trigger: 'axis',
				axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			legend: {
				textStyle:{color:'#fff'},
				top:'0',
				right:'0',
				data:[datas[0].tit,datas[1].tit,datas[2].tit]
			},
			grid: {
				top:'5%',
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			yAxis:  {
				type: 'value',
				axisLabel:{textStyle:{color:'#b1f5f5'}},
				axisTick:{show:false,lineStyle:{color:'#b1f5f5'}},
				axisLine:{lineStyle:{color:'#b1f5f5'}},
				splitLine:{show:false}
			},
			xAxis: {
				type: 'category',
				boundaryGap : false,
				splitLine:{show:false},
				axisTick:{lineStyle:{color:'#b1f5f5'},alignWithLabel:true},
				axisLabel:{textStyle:{color:'#b1f5f5'}},
				axisLine:{lineStyle:{color:'#b1f5f5'}},
				data:labels
			},
			series:_series
			// series: [
			// 	{
			// 		name: datas[0].tit,
			// 		type: 'line',
			// 		barWidth:'60%',
			// 		smooth:true,
			// 		areaStyle: {color:'rgba(0,254,254,0.3)'},
			// 		itemStyle:{normal:{color:'#00fefe'}},
			// 		data: values[0]
			// 	},
			// 	{
			// 		name: datas[1].tit,
			// 		type: 'line',
			// 		barWidth:'60%',
			// 		smooth:true,
			// 		areaStyle: {color:'rgba(94,163,215,0.3)'},
			// 		itemStyle:{normal:{color:'#5ea3d7'}},
			// 		data: values[1]
			// 	},
			// 	{
			// 		name: datas[2].tit,
			// 		type: 'line',
			// 		barWidth:'60%',
			// 		smooth:true,
			// 		areaStyle: {color:'rgba(202,193,221,0.3)'},
			// 		itemStyle:{normal:{color:'#cac1dd'}},
			// 		data: values[2]
			// 	}
			// ]
		};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}
 exports.echartsBar=function(id,datas){
	var labels = new Array();
	var value1 = new Array();
	var value2 = new Array();
	var value3 = new Array();

	for(var key in datas.data){
		labels.push(key);
		value1.push(datas.data[key][0]);
		value2.push(datas.data[key][1]);
		value3.push(datas.data[key][2]);
	}
	 

	var labelInfo={
		normal: {
        show: false,
        position: "insideBottomLeft",
        distance: "15",
        align: "left",
        verticalAlign: "left",
        rotate: "90",
        formatter: '{a} : {c}',
        fontSize: 12,
        rich: {
            name: {
                textBorderColor: '#fff'
            }
        }
	}
}
	
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var myChart = echarts.init(document.getElementById(id));
		option = {
			tooltip : {
				trigger: 'axis',
				axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			legend: {
				textStyle:{color:"#fff"},
				data:  datas.tit
			},
			grid: {
				top:'15%',
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			yAxis:  {
				type: 'value',
				axisLabel:{textStyle:{color:'#b1f5f5'}},
				axisTick:{lineStyle:{color:'#b1f5f5'}},
				axisLine:{lineStyle:{color:'#b1f5f5'}},
				splitLine:{show:false}
			},
			xAxis: {
				type: 'category',
				splitLine:{show:false},
				axisTick:{show:true,lineStyle:{color:'#b1f5f5'}},
				axisLabel:{textStyle:{color:'#b1f5f5'}},
				axisLine:{lineStyle:{color:'#b1f5f5'}},
				data:labels
			},
			series: [
				{
					name: datas.tit[0],
					type: 'bar',
					itemStyle:{normal:{color:'#e1c92b'}},
					barGap:"0%",
					label:labelInfo,
					data: value1
				},
				{
					name: datas.tit[1],
					type: 'bar',
					itemStyle:{normal:{color:'#90d3d3'}},
					barGap:"0%",
					label:labelInfo,
					data: value2
				},
				{
					name: datas.tit[2],
					type: 'bar',
					itemStyle:{normal:{color:'#feb17b'}},
					barGap:"0%",
					label:labelInfo,
					data: value3
				}
			]
		};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}

});
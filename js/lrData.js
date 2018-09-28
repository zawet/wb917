define({ //dedine闭包 
     leftData:[
         {
              txitle:"入场车辆",
              data:[
                {carNumber:"粤T 12345",time:"11:11:55",crossing:"3# 路口"},
                {carNumber:"粤T 12345",time:"11:11:55",crossing:"3# 路口"},
                {carNumber:"粤T 12345",time:"11:11:55",crossing:"3# 路口"},
                {carNumber:"粤T 12345",time:"11:11:55",crossing:"3# 路口"},
                {carNumber:"粤T 12345",time:"11:11:55",crossing:"3# 路口"},
                {carNumber:"粤T 12345",time:"11:11:55",crossing:"3# 路口"}   
              ]

         },
         {
                txitle:"出场车辆",
                data:[
                  {carNumber:"粤T 12345",time:"11:11:55",crossing:"3# 路口"},
                  {carNumber:"粤T 12345",time:"11:11:55",crossing:"3# 路口"},
                  {carNumber:"粤T 12345",time:"11:11:55",crossing:"3# 路口"},
                  {carNumber:"粤T 12345",time:"11:11:55",crossing:"3# 路口"},
                  {carNumber:"粤T 12345",time:"11:11:55",crossing:"3# 路口"},
                  {carNumber:"粤T 12345",time:"11:11:55",crossing:"3# 路口"}   
                ]
  
           },
           {
                txitle:"欠费车辆",
                data:[
                  {carNumber:"粤T 12345",time:"11:11:55",crossing:"3# 路口"},
                  {carNumber:"粤T 12345",time:"11:11:55",crossing:"3# 路口"},
                  {carNumber:"粤T 12345",time:"11:11:55",crossing:"3# 路口"},
                  {carNumber:"粤T 12345",time:"11:11:55",crossing:"3# 路口"},
                  {carNumber:"粤T 12345",time:"11:11:55",crossing:"3# 路口"},
                  {carNumber:"粤T 12345",time:"11:11:55",crossing:"3# 路口"}   
                ]
  
           },
           {
                txitle:"异常预警",
                data:[
                  {address:"龙瑞车场",info:"人工开闸",crossing:"3# 路口"},
                  {address:"龙瑞车场",info:"离线",crossing:"3# 路口"},
                ]
  
           }
     ] ,
     minData:{
          allCarNumber:1234567,//总车流量   
          total:1234567,//总收入
          cameras:[
            {x:14,y:26,name:"#1",carNum:62,congestion:3},
            {x:10,y:37,name:"#2",carNum:656,congestion:5},
            {x:20,y:56,name:"#3",carNum:700,congestion:6},
            {x:63,y:2,name:"#4",carNum:236,congestion:4},
            {x:69,y:28,name:"#5",carNum:880,congestion:7.2},
            {x:83,y:41,name:"#6",carNum:1222,congestion:10},

            {x:39,y:76,name:"#7",carNum:62,congestion:3},
            {x:49,y:71,name:"#8",carNum:656,congestion:5},
            {x:56,y:67,name:"#9",carNum:700,congestion:6},
            {x:63,y:63,name:"#10",carNum:236,congestion:4},
            {x:68,y:60,name:"#11",carNum:880,congestion:7.2},
            {x:73,y:57,name:"#12",carNum:1222,congestion:10}
          ],
          congestion:1.27,//拥堵指数
          carP:1000,//总车位
          carCount:1200//车辆数
     } ,
     rightData:{
      price: {
        tit: "收费金额",
        data: {"9.1": 45,"9.2": 55, "9.3": 36,"9.4": 28,"9.5": 64,"9.6": 51,"9.7": 20
        }
      },
      carFlow:[
        {
          tit:"总车流量",
          data:{
            "9.1": 444,"9.2": 333, "9.3": 346,
            "9.4": 543,"9.5": 456,"9.6": 456,"9.7": 500
          }
        },
        {
          tit:"入场",
          data:{
            "9.1": 144,"9.2": 133, "9.3": 146,
            "9.4": 143,"9.5":156,"9.6": 156,"9.7": 100
          }
        },
        {
          tit:"出场",
          data:{
            "9.1": 244,"9.2": 233, "9.3": 246,
            "9.4":243,"9.5": 256,"9.6": 256,"9.7": 300
          }
        }
      ],
      carType:{
        tit: ["临时车", "月租车", "无牌车"],
        data:{
          "9.1":[56,89,5],
          "9.2":[45,97,7],
          "9.3":[37,79,12],
          "9.4":[66,99,31],
          "9.5":[23,104,8],
          "9.6":[39,81,16],
          "9.7":[46,85,22],
        }
      }
     } 
        

});
	
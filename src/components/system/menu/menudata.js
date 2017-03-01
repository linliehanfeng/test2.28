const  data = [
    {
        name: '工具',
        root:true,
        level:0,
        children: [
            {name: '抢票',level:1,path:'抢票', open:false},
            { name: '行程套打',level:1 ,path:'行程套打', open:false},
            { name: '爬虫',level:1 ,path:'爬虫', open:false}
            ]
        },{
        name: '应用',
        root:true,
        level:0,
        children: [
            {name:'列表',level:1,path:'列表/list', open:false},
            {name:'表单',level:1,path:'表单/from', open:false},
        ]
},{
        name: '配置',
        root:true,
        level:0,
        children: [
            {name:'运营管理',level:1,
                children:[
                    {name:'短信发送',level:2 ,path:'短信', open:false},
                    {name:'报价单',level:2,path:'报价单', open:false}
                ]
            },
            {name:'数据管理',level:1,path:'数据', open:false},
            {name:'退票管理',level:1,
                children:[
                     {name:'退票维护',level:2,path:'退票', open:false},
                    {name:'退票单上传',level:2,
                        children:[
                             {name:'再多一级',level:3,path:'多一级', open:false},
                        ]
                    }
                ]
            }
            
        ]
},{
        name: '系统',
        root:true,
        level:0,
        children: [
            {name:'运营管理',level:1,
                children:[
                    {name:'短信发送',level:2 ,path:'短信', open:false},
                    {name:'报价单',level:2,path:'报价单', open:false}
                ]
            },
            {name:'数据管理',level:1,path:'数据', open:false},
            {name:'退票管理',level:1,
                children:[
                     {name:'退票维护',level:2,path:'退票', open:false},
                    {name:'退票单上传',level:2,
                        children:[
                             {name:'再多一级',level:3,path:'多一级', open:false},
                        ]
                    }
                ]
            }
            
        ]
}
]
export default data;
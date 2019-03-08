<template>
    <div class="home">
        <el-input v-model="id">{{ id }}</el-input>
        <el-button @click="findtest1">列表查询</el-button>
        <el-button @click="findtest2(id)">详情查询</el-button>
        <el-button @click="findtest3">导入数据</el-button>
        <div class="grid-test">
            <div class="item-a">aaa</div>
            <div class="item-b">bbb</div>
            <div class="item-c">ccc</div>
            <div class="item-d">ddd</div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'test',
    components: {
        
    },
    data(){
        return{
            id: ''
        }
    },
    methods:{
        //测试查询英灵列表
        findtest1() {
            let _this = this
            
            _this.axios.get('/api/getHeroList').then(res => {
                const data = res.data
                console.log(data)
            })
        },
        //测试查询英灵详情
        findtest2(id) {
            let _this = this
            let data = {
                'hero_id': id
            }
            console.log(data)
            _this.axios.get('/api/getHeroDetail', {
                params:data
            }).then(res => {
                const data = res.data
                console.log(data)
            })
        },
        //
        findtest3() {
            let _this = this
            //https://fgo.umowang.com/servant/ajax?card=&wd=&ids=&sort=12777&o=asc&pn=1
            //https://fgo.umowang.com/servant/ajax?card=&wd=&ids=&sort=12777&o=asc&pn=2
            let url = 'https://fgo.umowang.com/servant/ajax?card=&wd=&ids=&sort=12777&o=asc&pn=1'
            _this.axios.get(url).then(res => {
                const data = res.data.data
                // console.log(data)
                let arrary = []
                for(let i in data){
                    let item = {
                        hero_id: Number.parseInt(data[i].charid), //英灵编号
                        icon_id: '0' + data[i].charid, //头像id
                        stars: data[i].star,  //星级
                        cost: '',   //cost消耗
                        name_cn: data[i].name,    //中文名称
                        name_jp: '',    //日文名称
                        name_origin: '',    //原文名称
                        gender: '', //性别
                        alignment: '',  //阵营
                        attribute1: '',  //属性1
                        attribute2: '',  //属性2
                        class: data[i].classes,  //职阶
                        phantasm_cn: '',  //宝具中文
                        phantasm_origin: '',  //宝具原文
                        phantasm_icon: data[i].tprop,  //宝具图标
                        card_buster: data[i].cardbuster,	//红卡数量
                        card_arts: data[i].cardarts,	//蓝卡数量
                        card_quick: data[i].cardquick,	//绿卡数量
                        lvmax_atk: data[i].lvmax4atk,  //正常满级攻击
                        lvmax_hp: data[i].lvmax4hp,    //正常满级血量
                    }
                    arrary.push(item)
                }
                console.log('arrary', arrary)
                _this.axios.post('/api/add', arrary).then(res => {
                    // console.log(res)
                    if(res.data.msg === 'ok'){
                        _this.$message({
                            message: '添加成功',
                            type: 'success'
                        });
                    }
                })
            })
        },
    }
}
</script>
<style scoped lang="less">
    .grid-test{
        display: grid;
        grid-template-columns: 50px 50px 50px 50px;
        grid-template-rows: auto;
        grid-template-areas: 
        "header header header header"
        "main main . sidebar"
        "footer footer footer footer";
    }
    .item-a{
        background-color: aqua;
        grid-area: header;
    }
    .item-b{
        background-color: antiquewhite;
        grid-area: main;
    }
    .item-c{
        background-color: burlywood;
        grid-area: sidebar;
    }
    .item-d{
        background-color: blueviolet;
        grid-area: footer;
    }
</style>


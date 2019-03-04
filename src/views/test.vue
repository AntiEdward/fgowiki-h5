<template>
    <div class="home">
        <el-input v-model="id">{{ id }}</el-input>
        <el-button @click="findtest1">列表查询</el-button>
        <el-button @click="findtest2(id)">详情查询</el-button>
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
        }
    }
}
</script>
<style scoped lang="less">

</style>


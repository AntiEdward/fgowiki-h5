<template>
    <div class="container">
        <div class="nav-item">
            <el-button @click="jumpPage('heros')">英灵列表</el-button>
        </div>
        <div class="nav-item">
            <el-button @click="jumpPage('addHero')">添加英灵</el-button>
        </div>
        <div class="nav-item">
            <el-button @click="jumpPage('editHero')">编辑英灵</el-button>
        </div>
        <div class="nav-item">
            <el-button @click="jumpPage('fortune')">抽卡模拟</el-button>
        </div>
        <div class="nav-item">
            <el-button @click="jumpPage('test')">测试页面</el-button>
        </div>
        
    </div>
    
</template>

<script>
export default {
    name: '',
    data(){
        return{

        }
    },
    methods:{
        jumpPage(name){
            this.$router.push(name)
        }
    }
}
</script>

<style scoped lang="less">
    .container{
        display: grid;
        justify-items: center;
        .nav-item{
            margin: 20px;
            width: 200px;
        }
        .el-button{
            width: 100%;
        }
    }
    
</style>


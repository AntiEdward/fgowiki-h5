<template>
    <div >
        <el-button @click="test">dianwo</el-button>
    </div>
</template>

<script>
export default {
    //英灵列表
    data(){
        return{

        }
    },
    methods:{
        test(){
            const _this = this;
            _this.axios.get('/api/test').then(res => {
                console.log(res.data)
            })
        },
        getHerosList(){
            
        }
    }
}
</script>

<style>

</style>

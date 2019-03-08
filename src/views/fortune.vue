<template>
    <div class="container">
        <div class="fortune-button">
            <el-button>单抽</el-button>
            <el-button>十连</el-button>
        </div>
        <div class="fortune-result">

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
        // 抽爆！
        boom(){
            const _this = this;
            _this.axios.get('').then(res => {

            })
        }
    }
}
</script>

<style>

</style>

<template>
    <div class="container">
        <div>
            <el-form ref="form" :model="formData">
                <el-form-item label="英灵星级">
                    <el-input v-model="formData.stars"></el-input>
                </el-form-item>
                <el-form-item label="英灵名称">
                    <el-input v-model="formData.name"></el-input>
                </el-form-item>
                <el-form-item label="英灵职阶">
                    <el-input v-model="formData.class"></el-input>
                </el-form-item>
                <el-form-item size="large">
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>

        <div>
            <el-button @click="findtest()">测试查询</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            formData:{
                stars: '',
                name: '',
                class: ''
            }
        }
    },
    methods:{
        onSubmit() {
            console.log(this.formData);
        },
        findtest() {
            //調用查詢接口
            //axios.get('/api/posts')
        }
    }
}
</script>

<style>

</style>

<template>
    <div class="container">
        <div>
            <el-form ref="form" :model="formData">
                <el-form-item label="礼装编号">
                    <el-input v-model="formData.craft_id"></el-input>
                </el-form-item>
                <el-form-item label="头像id">
                    <el-input v-model="formData.icon_id"></el-input>
                </el-form-item>
                <el-form-item label="礼装星级"></el-form-item>
                <el-rate v-model="formData.stars"></el-rate>
                <el-form-item label="cost消耗">
                    <el-input v-model="formData.cost"></el-input>
                </el-form-item>
                <el-form-item label="礼装名称 - 中文">
                    <el-input v-model="formData.name_cn"></el-input>
                </el-form-item>
                <el-form-item label="礼装名称 - 日文">
                    <el-input v-model="formData.name_jp"></el-input>
                </el-form-item>
                <el-form-item label="礼装满级攻击">
                    <el-input v-model="formData.lvmax_atk"></el-input>
                </el-form-item>
                <el-form-item label="礼装满级生命">
                    <el-input v-model="formData.lvmax_hp"></el-input>
                </el-form-item>
                <el-form-item label="礼装技能类型">
                    <el-input v-model="formData.lvmax_atk"></el-input>
                </el-form-item>
                <el-form-item label="礼装技能描述">
                    <el-input v-model="formData.lvmax_hp"></el-input>
                </el-form-item>
                <el-form-item label="礼装详细信息">
                    <el-input type="textarea" v-model="formData.detail"></el-input>
                </el-form-item>

                <el-form-item size="large">
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            formData: {
                craft_id: null, //礼装编号
                icon_id: '', //头像id
                pic_id: '', //完整图片id
                stars: 0,  //星级
                cost: '',   //cost消耗
                name_cn: '',    //中文名称
                name_jp: '',    //日文名称
                lvmax_atk: '',  //满级攻击
                lvmax_hp: '',  //满级生命
                skill_type: '',  //技能类型
                skill_describe: '', //技能描述
                detail: '', //详细信息
            }
        }
    },
    methods:{
        onSubmit() {
            const _this = this
            //hero_id转数字类型
            _this.formData.hero_id = Number.parseInt(_this.formData.hero_id)
            // let data = {
            //     'hero_id' : _this.formData.hero_id
            // }
            _this.axios.post('/api/addCraft', _this.formData)
            .then(res => {
                // console.log(res)
                if(res.data.msg === 'ok'){
                    _this.$message({
                        message: '添加成功',
                        type: 'success'
                    });
                }
            })
        },
    }
}
</script>

<style>

</style>

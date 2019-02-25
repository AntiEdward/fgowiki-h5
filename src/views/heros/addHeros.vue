<template>
    <div class="container">
        <div>
            <el-form ref="form" :model="formData">
                <el-form-item label="英灵星级"></el-form-item>
                <el-rate v-model="formData.stars"></el-rate>
                <el-form-item label="英灵名称 - 中文">
                    <el-input v-model="formData.name"></el-input>
                </el-form-item>
                <el-form-item label="英灵名称 - 日文">
                    <el-input v-model="formData.name"></el-input>
                </el-form-item>
                <el-form-item label="英灵名称 - 外文">
                    <el-input v-model="formData.name"></el-input>
                </el-form-item>
                <el-form-item label="英灵职阶"></el-form-item>
                <div class="class-group">
                    <!-- <div :class="['icon-common','test']" @click="changeClassName('Saber')"></div> -->
                    <!-- saber -->
                    <div 
                        :class="['icon-common' , formData.class === 'Saber' ? 'icon-saber-g' : 'icon-saber-c']"
                        @click="changeClassName('Saber')">
                    </div>
                    <!-- lancer -->
                    <div 
                        :class="['icon-common' , formData.class === 'Lancer' ? 'icon-lancer-g' : 'icon-lancer-c']"
                        @click="changeClassName('Lancer')">
                    </div>
                    <!-- archer -->
                    <div 
                        :class="['icon-common' , formData.class === 'Archer' ? 'icon-archer-g' : 'icon-archer-c']"
                        @click="changeClassName('Archer')">
                    </div>
                    <!-- rider -->
                    <div 
                        :class="['icon-common' , formData.class === 'Rider' ? 'icon-rider-g' : 'icon-rider-c']"
                        @click="changeClassName('Rider')">
                    </div>
                   <!-- caster -->
                    <div 
                        :class="['icon-common' , formData.class === 'Caster' ? 'icon-caster-g' : 'icon-caster-c']"
                        @click="changeClassName('Caster')">
                    </div>
                    <!-- assassin -->
                    <div 
                        :class="['icon-common' , formData.class === 'Assassin' ? 'icon-assassin-g' : 'icon-assassin-c']"
                        @click="changeClassName('Assassin')">
                    </div>
                </div>
                <div class="class-group">
                    <!-- berserker -->
                    <div 
                        :class="['icon-common' , formData.class === 'Berserker' ? 'icon-berserker-g' : 'icon-berserker-c']"
                        @click="changeClassName('Berserker')">
                    </div>
                    <!-- ruler -->
                    <div 
                        :class="['icon-common' , formData.class === 'Ruler' ? 'icon-ruler-g' : 'icon-ruler-c']"
                        @click="changeClassName('Ruler')">
                    </div>
                    <!-- avenger -->
                    <div 
                        :class="['icon-common' , formData.class === 'Avenger' ? 'icon-avenger-g' : 'icon-avenger-c']"
                        @click="changeClassName('Avenger')">
                    </div>
                    <!-- mooncancer -->
                    <div 
                        :class="['icon-common' , formData.class === 'MoonCancer' ? 'icon-mooncancer-g' : 'icon-mooncancer-c']"
                        @click="changeClassName('MoonCancer')">
                    </div>
                    <!-- alterego -->
                    <div 
                        :class="['icon-common' , formData.class === 'AlterEgo' ? 'icon-alterego-g' : 'icon-alterego-c']"
                        @click="changeClassName('AlterEgo')">
                    </div>
                    <!-- shielder -->
                    <div 
                        :class="['icon-common' , formData.class === 'Shielder' ? 'icon-shielder-g' : 'icon-shielder-c']"
                        @click="changeClassName('Shielder')">
                    </div>
                </div>
                <el-form-item label="宝具名称 - 中文">
                    <el-input v-model="formData.name"></el-input>
                </el-form-item>
                <el-form-item label="宝具名称 - 日文">
                    <el-input v-model="formData.name"></el-input>
                </el-form-item>
                <el-form-item label="宝具名称 - 外文">
                    <el-input v-model="formData.name"></el-input>
                </el-form-item>
                <el-form-item label="宝具图标"></el-form-item>
                <div class="class-group">
                    <div 
                        :class="['icon-common' , 'icon-arts' , formData.phantasm_icon === 'Arts' ? 'icon-checked' : '']"
                        @click="changePhantasmIcon('Arts')">
                    </div>
                    <div 
                        :class="['icon-common' , 'icon-buster' , formData.phantasm_icon === 'Buster' ? 'icon-checked' : '']"
                        @click="changePhantasmIcon('Buster')">
                    </div>
                    <div 
                        :class="['icon-common' , 'icon-quick' , formData.phantasm_icon === 'Quick' ? 'icon-checked' : '']"
                        @click="changePhantasmIcon('Quick')">
                    </div>
                </div>
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
                stars: '',  //星级
                name_cn: '',    //中文名称
                name_jp: '',    //日文名称
                name_origin: '',    //外文名称
                class: '',  //职阶
                phantasm_cn: '',  //宝具中文
                phantasm_jp: '',  //宝具日文
                phantasm_origin: '',  //宝具外文
                phantasm_icon: '',  //宝具图标
            },
            //classSearchClicked: ''
        }
    },
    methods:{
        onSubmit() {
            console.log(this.formData);
        },
        //修改職階圖標
        changeClassName(name){
            //如果class已經選中，再次點擊為清空
            if(this.formData.class === name){
                this.formData.class = ''
            }else{
                this.formData.class = name
            }
        },
        //修改宝具图标
        changePhantasmIcon(name){
            if(this.formData.phantasm_icon === name){
                this.formData.phantasm_icon = ''
            }else{
                this.formData.phantasm_icon = name
            }
        },
        findtest() {
            let _this = this
            //調用查詢接口
            //_this.axios.get('/api/posts')
        }
    }
}
</script>

<style scoped lang="less">
    @import '../../assets/common.less';
    .class-group{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .icon-checked{
        border: 2px solid #ffc500;
    }
    .test{
        background-image: url('../../assets/common/AlterEgo-C.png')
    }
    
    
</style>

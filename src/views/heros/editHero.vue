<template>
    <div class="container">
        <div>
            <el-input v-model="search_id">{{ search_id }}</el-input>
            <el-button @click="getHeroDetail(search_id)">查询</el-button>
        </div>
        <div>
            <el-form ref="form" :model="formData">
                <el-form-item label="英灵编号">
                    <el-input v-model="formData.hero_id"  :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="头像id">
                    <el-input v-model="formData.icon_id"></el-input>
                </el-form-item>
                <el-form-item label="英灵星级"></el-form-item>
                <el-rate v-model="formData.stars"></el-rate>
                <el-form-item label="cost消耗">
                    <el-input v-model="formData.cost"></el-input>
                </el-form-item>
                <el-form-item label="英灵名称 - 中文">
                    <el-input v-model="formData.name_cn"></el-input>
                </el-form-item>
                <el-form-item label="英灵名称 - 日文">
                    <el-input v-model="formData.name_jp"></el-input>
                </el-form-item>
                <el-form-item label="英灵名称 - 外文">
                    <el-input v-model="formData.name_origin"></el-input>
                </el-form-item>
                <el-form-item label="英灵性别"></el-form-item>
                <el-select v-model="formData.gender" placeholder="请选择性别">
                    <el-option label="男性" value="male"></el-option>
                    <el-option label="女性" value="female"></el-option>
                    <el-option label="???" value="unknown"></el-option>
                </el-select>
                
                <el-form-item label="英灵阵营"></el-form-item>
                <el-select v-model="formData.alignment" placeholder="请选择阵营">
                    <el-option label="天" value="sky"></el-option>
                    <el-option label="地" value="earth"></el-option>
                    <el-option label="人" value="man"></el-option>
                    <el-option label="星" value="star"></el-option>
                    <el-option label="兽" value="beast"></el-option>
                </el-select>

                <el-form-item label="英灵属性"></el-form-item>
                <el-select v-model="formData.attribute1" placeholder="请选择第一属性">
                    <el-option label="秩序" value="lawful"></el-option>
                    <el-option label="中立" value="neutral"></el-option>
                    <el-option label="混沌" value="chaotic"></el-option>
                    <el-option label="无" value="unknown"></el-option>
                </el-select>
                <el-select v-model="formData.attribute2" placeholder="请选择第二属性">
                    <el-option label="善良" value="good"></el-option>
                    <el-option label="中庸" value="moderation"></el-option>
                    <el-option label="邪恶" value="evil"></el-option>
                    <el-option label="疯狂" value="insane"></el-option>
                    <el-option label="夏天" value="summer"></el-option>
                    <el-option label="花嫁" value="bride"></el-option>
                    <el-option label="无" value="unknown"></el-option>
                </el-select>

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
                    <el-input v-model="formData.phantasm_cn"></el-input>
                </el-form-item>
                <el-form-item label="宝具名称 - 日文">
                    <el-input v-model="formData.phantasm_jp"></el-input>
                </el-form-item>
                <el-form-item label="宝具名称 - 外文">
                    <el-input v-model="formData.phantasm_origin"></el-input>
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
                    <el-button type="primary" @click="onSubmit">确认修改</el-button>
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
    name: '',
    data(){
        return{
            search_id: '',
            formData:{
                hero_id: '', //英灵编号
                icon_id: '', //头像id
                stars: 0,  //星级
                cost: '',   //cost消耗
                name_cn: '',    //中文名称
                name_jp: '',    //日文名称
                name_origin: '',    //外文名称
                gender: '', //性别
                alignment: '',  //阵营
                attribute1: '',  //属性1
                attribute2: '',  //属性2
                class: '',  //职阶
                phantasm_cn: '',  //宝具中文
                phantasm_jp: '',  //宝具日文
                phantasm_origin: '',  //宝具外文
                phantasm_icon: '',  //宝具图标
            },
        }
    },
    methods: {
        /**
         * 查询英灵详情
         */
        getHeroDetail(id) {
            let _this = this
            let data = {
                'hero_id': id
            }
            // console.log(data)
            _this.axios.get('/api/getHeroDetail', {
                params:data
            }).then(res => {
                const data = res.data.data[0]
                console.log(data)
                _this.formData = data
            })
        },
        /**
         * 提交表单
         */
        onSubmit(){
            const _this = this
            _this.axios.post('/api/updateHeroDetail', _this.formData).then(res => {
                console.log(res)
            });
        }
    }
}
</script>

<style>

</style>

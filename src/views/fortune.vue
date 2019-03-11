<template>
    <div class="container">
        <div class="fortune-money">
            <div>圣晶石：{{ gem }} 个</div>
            <div>人民币：{{ money }} 块</div>
            
        </div>
        <div class="fortune-button">
            <el-button @click="boom">单抽</el-button>
            <el-button @click="boom10">十连</el-button>
            <!-- <el-button @click="cardsBox">ceshi</el-button> -->
        </div>
        <div class="fortune-result">
            <div v-for="item in resultData" class="fortune-item" v-bind:key="item.hero_id">
                <img :src="item.icon_src" alt="">
            </div>
        </div>
        <div class="fortune-result-classify">
            <div class="fortune-result-classify-item">
                <div class="fortune-result-classify-item-title">五星从者</div>
                <div class="fortune-result">
                    <div v-for="item in resultData_5_hero" class="fortune-item" v-bind:key="item.hero_id">
                        <img :src="item.icon_src" alt="">
                    </div>
                </div>
            </div>
            <div class="fortune-result-classify-item">
                <div class="fortune-result-classify-item-title">五星礼装</div>
                <div class="fortune-result">
                    <div v-for="item in resultData_5_craft" class="fortune-item" v-bind:key="item.craft_id">
                        <img :src="item.icon_src" alt="">
                    </div>
                </div>
                
            </div>
            <div class="fortune-result-classify-item">
                <div class="fortune-result-classify-item-title">四星从者</div>
                <div class="fortune-result">
                    <div v-for="item in resultData_4_hero" class="fortune-item" v-bind:key="item.hero_id">
                        <img :src="item.icon_src" alt="">
                    </div>
                </div>
                
            </div>
            <div class="fortune-result-classify-item">
                <div class="fortune-result-classify-item-title">四星礼装</div>
                <div class="fortune-result">
                    <div v-for="item in resultData_4_craft" class="fortune-item" v-bind:key="item.craft_id">
                        <img :src="item.icon_src" alt="">
                    </div>
                </div>
                
            </div>
            <div class="fortune-result-classify-item">
                <div class="fortune-result-classify-item-title">三星从者</div>
                <div class="fortune-result">
                    <div v-for="item in resultData_3_hero" class="fortune-item" v-bind:key="item.hero_id">
                        <img :src="item.icon_src" alt="">
                    </div>
                </div>
                
            </div>
            <div class="fortune-result-classify-item">
                <div class="fortune-result-classify-item-title">三星礼装</div>
                <div class="fortune-result">
                    <div v-for="item in resultData_3_craft" class="fortune-item" v-bind:key="item.craft_id">
                        <img :src="item.icon_src" alt="">
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import config from "../../config/config.js";

export default {
    name: '',
    data(){
        return{
            gem: 0,
            money: 0,

            resultData: [],

            resultData_5_hero: [],
            resultData_4_hero: [],
            resultData_3_hero: [],

            resultData_5_craft: [],
            resultData_4_craft: [],
            resultData_3_craft: [],
        }
    },
    methods:{
        /**
         * 投入金额
         */
        totalGold(num){
            //抽一次3个石头
            //一个石头6块钱
            this.gem = this.gem + num * 3;
            this.money = this.gem * 6;

        },
        /**
         * 卡池逻辑
         */
        cardsBox(){
            /**
             * 从者
             * 五星 1%
             * 四星 3% 
             * 三星 40% 
             * 礼装
             * 五星 4% 
             * 四星 12% 
             * 四星 40% 
             */
            const _this = this
            let probability = Math.floor(Math.random() * 100) + 1;  //1-100
            // console.log(probability)
            // 要有卡池，设定好不同情况的随机数区间
            // 第一次随机数，决定出什么类型，第二次随机数决定具体是什么
            if(probability === 1){
                //五星从者
                _this.getHeroListByStars(5).then(res => {
                    // 5个五星从者卡池
                    let probability = Math.floor(Math.random() * 5);  //0 - 4
                    _this.resultData.push(res[probability])
                    _this.resultData_5_hero.push(res[probability])
                })
                
            }else if(probability > 1 && probability <= 4){
                //四星从者
                _this.getHeroListByStars(4).then(res => {
                    // 20个四星从者卡池
                    let probability = Math.floor(Math.random() * 20);  //0 - 19
                    _this.resultData.push(res[probability])
                    _this.resultData_4_hero.push(res[probability])
                })
                
            }else if(probability > 4 && probability <= 44){
                //三星从者
                _this.getHeroListByStars(3).then(res => {
                    // 30个三星从者卡池
                    let probability = Math.floor(Math.random() * 30);  //0 - 29
                    _this.resultData.push(res[probability])
                    _this.resultData_3_hero.push(res[probability])
                    // console.log(res)
                })

            }else if(probability > 44 && probability <= 48){
                //五星礼装

                _this.resultData.push(res[probability])
                _this.resultData_5_craft.push(res[probability])
            }else if(probability > 48 && probability <= 60){
                //四星礼装

                _this.resultData.push(res[probability])
                _this.resultData_4_craft.push(res[probability])
            }else{
                //三星礼装
            
                _this.resultData.push(res[probability])
                _this.resultData_3_craft.push(res[probability])
            }
            // console.log(result)
        },
        /**
         * 抽卡接口 - 从者
         * promise写法
         */
        getHeroListByStars(stars){
            const _this = this;
            return new Promise( (resolve, reject) => {
                // resolve('sd')
                _this.axios.get('/api/getHeroListByStars', {
                    params: {
                        stars: stars
                    }
                }).then(res => {
                    if(res.data.msg === 'ok'){
                        let data = res.data.data
                        for(let i in data){
                            data[i].icon_src = config.url_icon + data[i].icon_id + '.jpg'
                        }
                        resolve(data)
                    }else{
                        reject('error')
                    }
                    
                })
            })
        },
        /**
         * 抽卡接口 - 礼装
         * promise写法
         */
        getCraftListByStars(stars){
            const _this = this;
            return new Promise( (resolve, reject) => {
                // resolve('sd')
                _this.axios.get('/api/getHerosListByStars', {
                    params: {
                        stars: stars
                    }
                }).then(res => {
                    if(res.data.msg === 'ok'){
                        let data = res.data.data
                        for(let i in data){
                            data[i].icon_src = config.url_icon + data[i].icon_id + '.jpg'
                        }
                        resolve(data)
                    }else{
                        reject('error')
                    }
                    
                })
            })
        },
        // 抽爆！
        boom(){
            this.cardsBox()
            this.totalGold(1)
        },
        // 抽爆！！
        boom10(){
            let i = 0
            while(i < 10){
                // this.boom();
                this.cardsBox()
                i++;
            }
            this.totalGold(10)
        }
    }
}
</script>

<style scoped lang="less">
    .fortune-result{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 20px;
        // width: 70%;
    }
    .fortune-item{
        margin: 10px;
        img{
            width: 70px;
            height: 70px;
        }
    }
    .fortune-money{
        margin-top: 20px;
        margin-bottom: 20px; 
    }
    .fortune-result-classify{
        margin-top: 20px;
        .fortune-result-classify-item{
            border-bottom: 1px solid #d1d5d8;
            border-top: 1px solid #d1d5d8;
            .fortune-result-classify-item-title{
                display: flex;
                margin-left: 10px;

            }
        }
    }
</style>

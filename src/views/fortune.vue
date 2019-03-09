<template>
    <div class="container">
        <div class="fortune-money">
            <div>圣晶石：{{ gem }} 个</div>
            <div>人民币：{{ money }} 块</div>
            
        </div>
        <div class="fortune-button">
            <el-button @click="boom">单抽</el-button>
            <el-button @click="boom10">十连</el-button>
            <el-button @click="cardsBox">ceshi</el-button>
        </div>
        <div class="fortune-result">
            <div v-for="item in resultData" class="fortune-item" v-bind:key="item.hero_id">
                <img :src="item.icon_src" alt="">
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
            resultData: []
        }
    },
    methods:{
        /**
         * 
         */
        totalGold(num){
            //抽一次3个石头
            //一个石头6块钱
            this.gem = this.gem + num * 3;
            this.money = this.gem * 6;

        },
        //
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
            let result = ''
            let probability = Math.floor(Math.random() * 100) + 1;  //1-100
            // console.log(probability)
            if(probability === 1){
                //五星从者
                result = '五星从者'
            }else if(probability > 1 && probability <= 4){
                //四星从者
                result = '四星从者'
            }else if(probability > 4 && probability <= 44){
                //三星从者
                result = '三星从者'
            }else if(probability > 44 && probability <= 48){
                //五星礼装
                result = '五星礼装'
            }else if(probability > 48 && probability <= 60){
                //四星礼装
                result = '四星礼装'
            }else{
                //三星礼装
                result = '三星礼装'
            }
            console.log(result)
        },
        // 抽爆！
        boom(){
            const _this = this;
            let id = Math.round(Math.random() * 238 + 1);
            _this.axios.get('/api/getHeroDetail', {
                params: {
                    hero_id: id
                }
            }).then(res => {
                console.log(res)
                let data = res.data.data[0]
                data.icon_src = config.url_icon + data.icon_id + '.jpg'
                _this.resultData.push(data)
            })
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
            width: 100px;
            height: 100px;
        }
    }
</style>

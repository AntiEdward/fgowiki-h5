<template>
    <div class="container">
        <el-button @click="getHerosList">dianwo</el-button>
        <div class="list-thead">
            <div class="hero-item-stars">星级</div>
            <div class="hero-item-icon">头像</div>
            <div class="hero-item-name">真名</div>
            <div class="hero-item-class">职阶</div>
            <div class="hero-item-phantasm">宝具</div>
        </div>
        <div class="hero-list">
            <div class="hero-item" v-for="(item) in listData" v-bind:key="item.hero_id">
                <div class="hero-item-stars">
                    {{item.stars}}
                </div>
                <div class="hero-item-icon">
                    <img class="hero-item-img" :src="item.icon_src">
                </div>
                <div class="hero-item-name">
                    {{item.name_cn}}
                </div>
                <div class="hero-item-class">
                    {{item.class}}
                </div>
                <div class="hero-item-phantasm">
                    <img class="hero-item-img" :src="item.phantasm_icon_src">
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import config from "../../../config/config.js";

export default {
    name: '',
    data(){
        return{
            listData: []
        }
    },
    methods:{
        /**
         * 获取英灵列表
         */
        getHerosList(){
            const _this = this;
            _this.axios.get('/api/getHeroList').then(res => {
                
                let data = res.data.data;
                
                // console.log(_this.listData)
                for(let i in data){
                    data[i].icon_src = config.url_icon_local + data[i].icon_id + '.jpg'
                    data[i].phantasm_icon_src = config.url_phantasm_icon_local + data[i].phantasm_icon + '.png'
                }
                _this.listData = data;
            })
        }
    }
}
</script>

<style scoped lang="less">
    .list-thead{
        display: flex;
        margin-top: 10px;
    }
    .hero-item{
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 10px;
        .hero-item-img{
            width: 50px;
            height: 50px;
        }
    }
    .hero-item-stars{
        width: 20%;
    }
    .hero-item-icon{
        width: 20%;
    }
    .hero-item-name{
        width: 20%;
    }
    .hero-item-class{
        width: 20%;
    }
    .hero-item-phantasm{
        width: 20%;
    }
    
</style>

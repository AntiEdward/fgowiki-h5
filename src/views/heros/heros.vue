<template>
    <div class="container">
        <!-- <el-button @click="getHerosList(1)">dianwo</el-button> -->
        <div class="list-thead">
            <div class="hero-item-stars">星级</div>
            <div class="hero-item-icon">头像</div>
            <div class="hero-item-name">真名</div>
            <div class="hero-item-class">职阶</div>
            <div class="hero-item-phantasm">宝具</div>
            <div class="hero-item-button">编辑</div>
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
                <div class="hero-item-button">
                    <el-button @click="jumpToEdit(item.hero_id)">编辑</el-button>
                </div>
            </div>
        </div>
        <div>
            <el-button @click="getMoreHeroList">加载更多</el-button>
        </div>
    </div>
</template>

<script>
import config from "../../../config/config.js";

export default {
    name: '',
    data(){
        return{
            listData: [],
            page: 1
        }
    },
    mounted(){
        this.page = 1;
        this.getHerosList(this.page);
    },
    methods:{
        /**
         * 获取英灵列表
         */
        getHerosList(page){
            const _this = this;
            _this.axios.get('/api/getHeroList', {
                params: {
                    page: page
                }
            }).then(res => {
                if(res.data.msg !== 'ok'){
                    return
                }
                let data = res.data.data;
                // console.log(_this.listData)
                for(let i in data){
                    data[i].icon_src = config.url_icon + data[i].icon_id + '.jpg'
                    data[i].phantasm_icon_src = config.url_phantasm_icon + data[i].phantasm_icon + '.png'

                    _this.listData.push(data[i]);
                }
                
            })
        },
        /**
         * 加载更多，翻页
         */
        getMoreHeroList(){
            this.page++
            this.getHerosList(this.page)
        },
        /**
         * 跳转编辑页面
         */
        jumpToEdit(id){
            this.$router.push({
                name: 'editHero',
                params: {
                    hero_id: id
                }
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
        width: 10%;
    }
    .hero-item-icon{
        width: 20%;
    }
    .hero-item-name{
        width: 20%;
    }
    .hero-item-class{
        width: 15%;
    }
    .hero-item-phantasm{
        width: 20%;
    }
    .hero-item-button{
        width: 15%;
    }
    
</style>

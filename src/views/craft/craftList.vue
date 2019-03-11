<template>
    <div class="container">
        <div class="list-thead">
            <div class="craft-item-id">编号</div>
            <div class="craft-item-stars">星级</div>
            <div class="craft-item-icon">头像</div>
            <div class="craft-item-name">名称</div>
            <div class="craft-item-skill">技能</div>
            <div class="craft-item-describe">效果</div>
            <div class="craft-item-button">编辑</div>
        </div>
        <div class="craft-list">
            <div class="craft-item" v-for="(item) in listData" v-bind:key="item.craft_id">
                <div class="craft-item-id">
                    {{item.craft_id}}
                </div>
                <div class="craft-item-stars">
                    {{item.stars}}
                </div>
                <div class="craft-item-icon">
                    <img class="craft-item-img" :src="item.icon_src">
                </div>
                <div class="craft-item-name">
                    {{item.name_cn}}
                </div>
                <div class="craft-item-skill">
                    {{item.skill_type}}
                </div>
                <div class="craft-item-describe">
                    {{item.skill_describe}}
                </div>
                <div class="craft-item-button">
                    <el-button @click="jumpToEdit(item.craft_id)">编辑</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import config from "../../../config/config.js";

export default {
    data(){
        return{
            listData: [],
            page: 1
        }
    },
    mounted(){
        this.page = 1;
        this.getCraftList(this.page);
    },
    methods: {
        getCraftList(page){
            const _this = this;
            _this.axios.get('/api/getCraftList', {
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
        getMoreCraftList(){
            this.page++;
            this.getCraftList(this.page);
        },
        /**
         * 跳转编辑页面
         */
        jumpToEdit(id){
            this.$router.push({
                name: 'editCraft',
                params: {
                    craft_id: id
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
    .craft-item{
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 10px;
        .craft-item-img{
            width: 50px;
            height: 50px;
        }
    }
    .craft-item-id{
        width: 10%;
    }
    .craft-item-stars{
        width: 10%;
    }
    .craft-item-icon{
        width: 10%;
    }
    .craft-item-name{
        width: 20%;
    }
    .craft-item-skill{
        width: 10%;
    }
    .craft-item-describe{
        width: 30%;
    }
    .craft-item-button{
        width: 10%;
    }
</style>

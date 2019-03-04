<template>
    <div class="home">
        <iframe 
            width="560" 
            height="315" 
            src="//player.bilibili.com/player.html?aid=824961&cid=1199934&page=1" 
            scrolling="no" 
            border="0" 
            frameborder="no" 
            framespacing="0" 
            allowfullscreen="true">
        </iframe>
        <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/mllXxyHTzfg?controls=0" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
        <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/mllXxyHTzfg" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>
</template>

<script>


export default {
    name: 'test',
    components: {
        
    },
    methods:{
        //测试查询英灵列表
        findtest1() {
            let _this = this
            
            _this.axios.get('/api/getHeroList').then(res => {
                const data = res.data
                console.log(data)
            })
        },
        //测试查询英灵详情
        findtest2() {
            let _this = this
            
            _this.axios.get('/api/getHeroList').then(res => {
                const data = res.data
                console.log(data)
            })
        }
    }
}
</script>
<style scoped lang="less">

</style>


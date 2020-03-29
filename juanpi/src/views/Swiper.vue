<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in list" :key="index">
                <img :src="item.pic">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    created() {
        this.$axios.get("https://webservice.juanpi.com/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4_0&app_name=zhe&app_version=&platform=&catname=newest_zhe").then((res)=>{
        //    console.log(res)
            this.list=res.data.adsInfo.slide_ads.config.slide;
        })
    },
    
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    width: 100%;
    height: 2.9rem;
    img{
        width: 100%;
        height: 100%;
    }
}
</style>

<template>
    <div class="nav">
        <div class="mynav">
            <ul>   
                <router-link to="/home/homeindex/specialList" tag="li" active-class="select" :class="flag">精选专场</router-link>
                <router-link to="/home/homeindex/singlelist" tag="li" active-class="select">精选单品</router-link>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import Speciallist from './SpecialList'
export default {
    data(){
        return{
            flag:true
        }
    },
    components:{
        Speciallist
    },
    created() {
        //https://webservice.juanpi.com/api/getGoods?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc
        //https://webservice.juanpi.com/api/getGoods?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpdp&flag=tab_hpdp
    },
} 
</script>

<style lang="scss" scoped>
.nav{
    width: 100%;
    height: 100%;
}
.mynav{
    width: 100%;
    height:0.88rem;
    position: sticky;
    z-index: 4;
    float: left;
    ul{
        height: 0.88rem;
        float: left;
        margin-left: 0.2rem;
        li{
            float: left;
            font-size:0.3rem;
            line-height: 0.88rem;
        }
        li:nth-child(2){
            padding-left: 0.3rem;
        }
    }
}
.select{
    color:#ff464e;
    border-bottom: 0.02rem solid #ff464e;
}
</style> 

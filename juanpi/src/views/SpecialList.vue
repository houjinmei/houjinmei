<template>
    <div class="speciallist">
        <ul class="list">
            <li v-for="(item,index) in list" :key="index" @click="go(item)">
                <img :src="item.pic_url">
                <img class="logo" :src="item.logo_url">
                <p class="tips">{{item.coupon_tips}}</p>
                <p class="title">{{item.title}}</p>
                <span>{{item.time_left}}</span>
            </li>
        </ul>
        
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
        this.$axios.get("https://webservice.juanpi.com/api/getGoods?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc").then((res)=>{ 
            this.list=res.data.data.goods
        })
    },
    methods: {
        go(item){
            this.$router.push({name:'detail',query:item.goods_id})
        }
    },
}
</script>

<style lang="scss" scoped>
.speciallist{
    width: 100%;
    height: 100%;
    .list{
        float: left;
        li{
            width: 50%;
            float: left;
            img:nth-child(1){
                width: 100%;
                position: relative;
            }
            .logo{
                width: 1rem;
                height: 0.5rem;
                background:#fff;
                position: absolute;
                margin-left:-1.2rem;
                margin-top: 3.5rem;
            }
            .tips{
                color:#ff464e;
                font-size:0.3rem;
                padding-left:0.2rem;
            }
           
                .title{
                    width:2.2rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    padding-left:0.2rem;
                    float: left;
                    padding-top:0.1rem;
                    padding-bottom:0.3rem;
                    color:#333;
                }
                span{
                    color:rgb(190, 190, 190);
                    float: right;
                    font-size:0.1rem;
                    padding-right:0.2rem;
                }
            
            
        }
    }
}
</style>

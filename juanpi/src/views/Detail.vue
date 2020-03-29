<template>
    <div class="detail">
        <div class="head">
            <img :src="list.goods_origin_url" class="banner">
            <div class="banner_head">
                <img class="back" src="../../public/img/back.png"  @click="back">
                <!-- <img class="more" src="../../public/img/more.png"> -->
            </div>
            <div class="con_info">
                <div class="info_con">
                    <p>￥{{list.sprice}}</p>
                    <p>￥{{list.oprice}}</p>
                    <p>包邮</p>
                    <p>{{list.join_number}}</p>
                </div>
                <p class="title">{{list.goods_title}}</p>
            </div>
            <div class="con">
                <p>24小时发货</p>
                <p>7天包退</p>
                <p>售后补贴</p>
                <img src="../../public/img/more.png">
            </div>
            <div class="address">
                <p>请选择:</p>
                <p>{{list.fav_name}}、{{list.zav_name}}</p>
                <img src="../../public/img/right.png">
            </div>
             <div class="zchang">
                 <div class="zhuanc">
                    <p>{{list.goods_title}}<span>进入专场</span></p>
                    
                 </div>
                
                <p class="find">查看店铺所有商品</p>
            </div>
            <div class="main">
                <div class="main-container">
                    <ul class="main-nav">
                        <li>图文详情</li>
                        <li>商品参数</li>
                        <li>咨询与售后</li>
                    </ul>
                </div>
            </div>
                
            <div class="image">
                <ul>
                    <li v-for="(item,index) in img" :key="index">
                        <img :src="item.av_zpic">
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer">
            <ul>
                <li @click="goIndex">
                    <!-- <span class="iconfont icon-shouye"></span> -->
                    <p>首页</p>
                </li>
                <li @click="goCart">
                    <!-- <span class="iconfont icon-gouwuche "></span> -->
                    <p>购物车</p>
                </li>
                <li>立即购买</li>
                <li @click="add(list)">加入购物车</li>
            </ul>
        </div>
        
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data(){
        return{
            list:[],
            img:[]
        }
    },
    computed: {
        // ...mapState(['lists','list'])
    },
    created() {
        let id =this.$route.query;
        this.$axios.get(`https://webservice.juanpi.com/api/getMemberAboutInfo?goods_id=${id}`).then((res)=>{  
            this.list=res.data.skudata.info
            this.img=res.data.skudata.sku
            this.list.id=id
            console.log(this.list.id)
        })
    },
    methods:{
        // ...mapMutations(["add"]),
        back() {
            this.$router.back()           
        },
        getData(){
            this.$axios.get("")
        },
        goIndex(){
            this.$router.go(-1);
        },
        // add(list){
        //     this.$router.push({name:'cart',query:this.list})
        //     // localStorage.setItem("car",JSON.stringify(this.list))
        //     console.log(this.list)
        // },
        goCart(){
            this.$router.push({name:'cart1'})
        }
    },

}
</script>

<style lang="scss" scoped>
@import '../../public/font/iconfont.css';
@import '../assets/css/reset.css';
.detail{
    width: 100%;
    height: 100%;
    
    .head{
        width:100%;
        .banner{
            width: 100%;
            height: 7.5rem;
            display: block;
        }
        .banner_head{
            position: absolute;
            top:0.2rem;
            left:0.1rem;
            img{
                width:0.4rem;
                height:0.4rem;
            }
        } 
    }
    .con_info{
        width: 100%;
        height: 1.8rem;
        float: left;
        overflow: hidden;
        border-bottom:0.2rem solid #eee;
        .info_con{
            width:100%;
            overflow: hidden;
            p{
                display: inline;
                float: left;
                padding-top: 0.2rem;
            }
            p:nth-child(1){
                color:#ff464e;
                font-size:0.5rem;
                font-weight: 600;
                padding-left:0.15rem;
            }
            p:nth-child(2){
                color:rgb(195, 195, 195);
                text-decoration: line-through;
                padding-top:0.5rem;
                padding-left:0.1rem;
            }
            p:nth-child(3){
                background: #ff464e;
                padding: 0.02rem;
                margin-top:0.4rem;
                margin-left: 0.15rem;
                border-radius: 0.05rem;
                color:#fff;
            }
            p:nth-child(4){
                color:rgb(195, 195, 195);
                float: right;
                padding-right:0.2rem;
                padding-top: 0.4rem;
            }
        }
        .title{
            display: block;
            font-size:0.3rem;
            padding-left:0.2rem;
            padding-top:0.15rem;
        }
    }
    .con{
        width: 100%;
        height:0.96rem;
        border-bottom:0.2rem solid #eee;
        float: left;
        p{
            float: left;
            display:inline;
            line-height: 0.96rem;
            font-size: 0.2rem;
            padding-left:0.3rem;
        }
        img{
            width: 0.4rem;
            margin-top:0.3rem;
            float: right;
            margin-right:0.3rem;
        }
    }
    .address{
        width: 100%;
        height: 0.96rem;
        float: left;
        border-bottom:0.2rem solid #eee;
        p{
            display: inline-block;
            float: left;
            line-height: 0.96rem;
            font-size: 0.3rem;
            padding-left: 0.2rem;
        }
        img{
            width: 0.4rem;
            margin-top:0.3rem;
            float: right;
            margin-right:0.3rem;
        }
    }
    .zchang{
        width: 100%;
        height: 1.7rem;
        float: left;
        .zhuanc{
            width: 100%;
            height: 1rem;
            border-bottom: 0.01rem solid #ddd;
            float: left;
            margin-bottom:0.2rem;
            p{
                font-size:0.3rem;
                width: 95%;
                padding-left:0.3rem;
                float: left;
                overflow: hidden;
                margin-top:0.2rem;
                span{
                    margin-top:0.1rem;
                    float:right;
                    font-size: 0.2rem;
                    padding: 0.1rem;
                    border:0.01rem solid #ccc;
                    margin-right:0.2rem;
                }
            }
        }
        .find{
            text-align: center;
            font-size:0.28rem;
            color:rgb(165, 164, 164);
            padding-top: 0.2rem;
        } 
    }
    .main{
        width: 100%;
        height:1.05rem;
        float: left;
        .main-container{
            width: 96%;
            height: 0.6rem;
            border:0.01rem solid #ccc;
            border-radius: 0.1rem;
            margin-left: 2%;
            text-align: center;
            ul{
                float: left;
                li{
                    line-height: 0.6rem;
                    width:2.35rem;
                    float: left;
                    font-size:0.28rem;
                    border-right:0.01rem solid #ccc;
                }
                li:last-child{
                    border-right:0;
                }
            }
        }
    }
    .image{
            width: 100%;
            height: 1.05rem;
            li{
                float: left; 
                width:49%;
                text-align: center;
                border:0.03rem solid #eee;
                img{
                   margin:0 auto;
                    
                }
            }
            li:nth-of-type(2n){
                border-left: 0;
            }
            li:last-child{
                margin-bottom:1.2rem;
            }
        }
    .footer{
        width: 100%;
        height: 1rem;
        background:#fff;
        position: fixed;
        bottom: 0;
        z-index: 100;
        ul{
            float: left;
            text-align: center;
            li{
                float: left;
                height: 1rem;
                line-height: 1rem;
                font-size: 0.25rem;
                p{
                    font-size:0.25rem;
                }
            }
            li:nth-child(1){
                width: 1.44rem;
                border-right:0.02rem solid #ccc;
            }
             li:nth-child(2){
                 width: 1.44rem;
                 border-right:0.02rem solid #ccc;
             }
             li:nth-child(3){
                 width: 1.85rem;
                 border-right:0.02rem solid #ccc;
             }
             li:last-child{
                 width: 2.7rem;
                 background: #ff464e;
                 color:#fff;
             }
        }
    }
}

</style>

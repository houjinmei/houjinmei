<template>
    <div>
        <div>
            <div class="top-box">
                <div @click="back" class="back">
                    <img src="../../public/img/back.png">
                </div>
                <div>{{name}}</div>
                <div class="right-box">
                     <div @click="search">
                         <span class="iconfont icon-sousuo"></span>
                     </div>
                    <div>...</div>
                </div>             
            </div>
            <div class="filter"> 
                <ul>
                    <li v-for="(item,index) in arr" :key="index" @click="filter(index)" :class="{changeColor:index===curIndex}">{{item}}</li>
                </ul>
            </div>
            <div class="list-img">
                <ul
                    v-infinite-scroll="loadMore"
                    infinite-scroll-disabled="loading"
                    infinite-scroll-distance="10">
                    <li v-for="(item,index) in list" :key="index" @click="clickImg(item)">
                        <img :src="item.pic_url">
                        <p>
                            <span>￥{{item.cprice}}</span>
                            <span>{{item.oprice}}</span>
                            <span>{{item.residue}}</span>
                        </p>
                        <p class="img-name">{{item.title}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { InfiniteScroll,Indicator } from 'mint-ui';
export default {
    data(){
        return{
            arr:["推荐","价格","销量","上新","筛选"],
            list:[],
            name:"",
            num:1,
            curIndex:0,
        }
    },
    watch: {
        $route:{
            handler(n){
                this.name=n.params.name;
            },
            deep:true,
            immediate:true
        }
    },
     created(){
        this.name=this.$route.params.name;
        this.getData()
     },
    methods:{
        getData(){
            Indicator.open('加载中...');
            this.$jsonp(`https://shop.juanpi.com/gsort?key=%7B%22cdt%22%3A%7B%22is_show_presale%22%3A%220%22%2C%22hot_show_type%22%3A1%2C%22fcate%22%3A%2259%22%2C%22sale_type%22%3A2%7D%2C%22order%22%3A%7B%22show_stime%22%3A%22desc%22%2C%22sales%22%3A%22desc%22%2C%22fav%22%3A%22desc%22%2C%22sort%22%3A%22desc%22%7D%7D&type=50&zhouyi_ids=p8_c4_l4&machining=danpin&page=${this.num}&rows=10&dtype=JSONP&price_range=&cat_threeids=&filter_id=&callback=gsort_callback`).then((res)=>{     
            this.list= this.list.concat(res.list)
            this.filerList=this.list.concat(res.list)
            Indicator.close();
            console.log(res)
                })
            },
            loadMore() {
                this.loading = true;
                this.num++
                this.getData()
                this.loading = false;
            },
            filter(index){
                switch(index){
                    case 0:
                        this.curIndex=0
                        this.list=this.filerList
                        this.list.sort((a,b)=>a.sort-b.sort)
                        break;
                    case 1: 
                        this.list=this.filerList
                        this.list.sort((a,b)=>a.cprice-b.cprice) 
                        this.curIndex=1
                        break;
                    case 2:
                         this.list=this.filerList
                        this.list.sort((a,b)=>a.good_rate-b.good_rate) 
                        this.curIndex=2
                        break;
                    case 3:
                         this.list=this.filerList
                        this.list.sort((a,b)=>a.residue-b.residue) 
                        this.curIndex=3
                        break;
                    case 4:
                         this.list=this.filerList
                        this.list.sort((a,b)=>a.good_rate-b.good_rate) 
                        this.curIndex=4
                        break;
                }
            },
            back(){
                this.$router.go(-1)
            },
            search(){
                this.$router.push({
                    name:"Search"
                })
            },
            clickImg(item){
                this.$router.push({ name:"detail",query:item.goods_id})
            }
            
        }
}
</script>
<style lang="scss" scoped>
    .top-box{
       height:0.9rem;
       display:flex; 
       justify-content: space-between;
       font-size: 0.36rem;
       border-bottom: 1px solid #ebebeb;
       align-items: center;
       .back{
           font-size:0.6rem;
           img{
               width:0.35rem;
               height:0.35rem;
               margin-left: 0.1rem;
               margin-bottom:0.1rem;
           }
       }
       .right-box{
           display:flex; 
           width:1rem;
           span{
               margin-right:0.1rem;
           }
       }
    }
    .filter{
        font-size: 0.3rem;
        color:grey;
        position: sticky;
        z-index: 4;
        top:0;
        background:#fff;
        ul{
            height:0.8rem;
            display: flex;
            li{
                height:0.8rem;
                line-height:0.8rem!important;
                width: 1.47rem;
                text-align: center;
                line-height: 0.56rem;
            }
            .changeColor{
                color:#ff464e;
            }
        }       
    }
    .list-img{
        ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            position: relative;
            z-index: 2;
            background: #fff;
            li{
            display: inline-block;
            height:4.74rem;
            width:3.7rem;
                img{
                    width: 100%;
                }
                span:first-of-type {
                    color:#ff464e;
                    font-size:0.3rem;
                    margin-right:0.08rem;
                }
                span:nth-of-type(2){
                    color:#bbb;
                    font-size:0.22rem;
                    text-decoration: line-through;
                }
                span:last-of-type{
                    color:#bbb;
                    font-size:0.22rem;
                    position:relative;
                    right:-1.8rem;
                }
                .img-name{
                    margin-top:0.08rem;
                    margin-left:0.16rem;
                    font-size:0.24rem;
                    color:#333;
                }
            }     
        }
        
    }
</style>



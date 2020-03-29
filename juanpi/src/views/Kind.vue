<template>
  <div class="kind">
    <Search></Search>
    <div class="box">
      <div class="left">
          <ul>
            <li  v-for="(item,index) in list" :key="item.id" @click="click(index)" :class="{changeCol:clickIndex===index}">{{item.name}}</li>
          </ul>
      </div>
      <div class="right">
          <ul>
            <li v-for="(item,index) in nameList" :key="index">
              <div class="rightBox" @click="fun(index)">
                <img :src="'//s2.juancdn.com'+item.icon">
                <span>{{item.name}}</span>
              </div>
            </li>
          </ul> 
      </div>

    </div>
  </div>
</template>
<script>
import Search from "./Search"
  export default{
      data(){
        return{
          list:[],
          clickIndex:0,
          nameList:[],
        }
      },
      components:{
        Search,
      },
      watch:{
        clickIndex:{
          handler(n){
            this.getData()
          },
          deep:true,
          immediate: true,
        }
      },
      methods:{
        getData(){
          this.$jsonp("https://m.juanpi.com/cate/catelist?pf=8&area=4&bi=222&dtype=jsonp&_=1559802355977&callback=jsonp1").then((res)=>{
          this.list=res
          this.nameList=res[this.clickIndex].secondCateList
          console.log(this.nameList)
        })
        },
        click(index){
          this.clickIndex=index;

        },
        fun(index){
          this.$router.push({
            name:"Listimg",
            params:{
                name:this.nameList[index].name
            }
          })
        }
      }
  } 
</script>
<style lang="scss" scoped>
    .box{
      height:16rem;
      background: #eee;
      display:flex;
      font-size:0.3rem;
      .left{
        width: 25%;
        background:#f9f9f9;
        li{
          height:0.9rem;
          text-align:left;
          border-left: 4px solid #f9f9f9;
          line-height:0.9rem;
          text-indent:0.3rem;
          border-bottom:1px solid #ebebeb;
        }
        .changeCol{
           border-left: 4px solid #ff464e;
           background: #fff;
           color: #ff464e
        }
      }
      .right{
        padding-top:0.2rem;
        width:75%; 
        background: #fff;
        li{
          display:inline-block;
           width:1.1rem;
            height:1.8rem; 
            overflow: hidden;
          padding: 0 0.38rem;      
          .rightBox{                          
            text-align: center;
            font-size: 0.24rem;          
            img{
            width: 100%;
          }
        }
        }       
      }
    }
</style>



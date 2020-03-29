<template>
  <div class="cart">
    <div class="head">
      <img src="../../public/img/back.png" @click="go">
      <h2>购物车</h2>
    </div>
    <div class="container">
      <div class="select">
        <input type="checkbox" class="checkbox" checked>
        <p>跨店促销</p>
      </div>
      <div class="content">
        <ul>
          <li>
            <input type="checkbox" checked>
            <img :src="list.goods_pic_url">
            <p>{{list.goods_title}}</p>
            <p>￥{{list.sprice}}<span>￥{{list.oprice}}</span></p>
            <p><button @click="dec()">-</button>{{count}}<button @click="inc()">+</button></p>
            <!-- x -->
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <p>
        <input type="checkbox" checked>
        全选
      </p>
      <ul>
        <li>合计:<span>￥{{list.sprice}}</span></li>
        <li class="last">总额{{list.sprice}}<span>立减:0.00</span></li>
      </ul>
      
      <button class="btn">去结算</button>

    </div>
  </div>
</template>
<script>
import {mapState,mapMutations,mapGetters} from 'vuex'
export default{
  data(){
    return{
      list:[],
      count:1
    }
  },
  computed: {
    ...mapState(['cart','car'])
  },
  created() {
    let list=this.$route.query;
    this.list=list
    // var car =JSON.parse(localStorage.getItem("car")||[])
    // console.log(car)
    // this.list=this.list.push(car);
    console.log(this.list)
  },
  methods:{
    go(){
      this.$router.push({path:'/'})
    },
    dec(){
      if(this.count>1){
          var m=this.list.vprice
          this.count--; 
          this.list.sprice=(this.list.sprice-m).toFixed(2);
        }
    },
    inc(){
      var m=this.list.vprice
      this.count++;
      this.list.sprice=(this.count*m).toFixed(2)
    }
  }
}
</script>
<style lang="scss" scoped>
.cart{
  width: 100%;
  height: 100%;
  overflow-x: auto;
  .head{
    width: 100%;
    height: 0.88rem;
    border-bottom:0.01rem solid #eee;
    float: left;
    img{
      width:0.35rem;
      height: 0.35rem;
      margin: 0.25rem;
      float: left;
    }
    h2{
      font-weight:100;
      line-height: 0.88rem;
      margin-right:0.5rem;
      text-align: center;
    }
  }
  .container{
    width:100%;
    height: 100%;
    float: left;
    .select{
      float: left;
      width: 100%;
      height: 0.89rem;
      border-bottom:0.01rem solid #eee;
      line-height: 0.89rem;
      input{
        margin: 0.3rem;
        float: left;
      }
      p{
        font-size:0.3rem;
        color:#ccc;
      }
    }
    .content{
      height: 100%;
      float: left;
      ul{
        float: left;
        li{
          float: left;
          width:100%;
          height: 2.45rem;
          border-bottom: 0.01rem solid #eee;
          padding-left:0.4rem;
          input{
            float: left;
            margin-top:1rem;
            margin-right:0.3rem;
          }
          img{
            float: left;
            width: 1.8rem;
            margin-top:0.3rem;
            margin-right:0.2rem;
          }
          p{
            float: left;
            width:4.28rem;
            font-size: 0.27rem;
            margin-top:0.4rem;
          }
          p:nth-child(4){
            color:#ff464e;
            font-size: 0.2rem;
            span{
              color:#ccc;
              text-decoration: line-through;
            }
          }
          p:last-child{
            width: 1.5rem;
            float: right;
            margin-right:0.4rem;
            margin-bottom:0.4rem;
            margin-top:0;
            button{
              width: 0.3rem;
              height: 0.5rem;
              margin-left: 0.1rem;
              margin-right: 0.1rem;
            }
          }
        }
      }
    }
  }
  .footer{
    float: left;
    position: fixed;
    bottom:0;
    width:100%;
    height: 1rem;
    border-top:0.01rem solid #eee;
    z-index:100;
    background: #fff;
    p{
      float: left;
      width: 1.6rem;
      font-size: 0.3rem;
      line-height: 1rem;
      input{
        margin-top: 0.4rem;
        float: left;
        margin-left:0.5rem;
        margin-right: 0.1rem;
      }
    }
    ul{
      float: left;
      width: 3.5rem;
      text-align: right;
      li:first-child{
        font-size:0.3rem;
        margin-top:0.1rem;
        span{
          color:#ff464e;
        }
      }
      .last{
        color:#999;
        // display: inline;
        // width:2rem!important;
        // font-size:0.1rem!important;
      }
    }
    .btn{
      float: right;
      width: 2.25rem;
      height: 1rem;
      background:#ff464e;
      font-size:0.35rem;
      color:#fff;
      border:0;
    }
  }
}
</style>
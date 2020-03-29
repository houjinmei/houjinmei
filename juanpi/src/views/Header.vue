<template>
    <div class="header">
        <router-link class="header-con" to="/search">
            <span class="iconfont">&#xe666;</span>
            <p class="juan">卷皮</p>
            <p class="sousuo">搜索</p>
        </router-link>
        <span class="iconfont fl">&#xe6be;</span>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header{
    width: 100%;
    height: 0.9rem;
    display:flex;  
    justify-content: space-around;
}
.header-con{
    width: 6.34rem;
    height:0.56rem;
    background: #f2f2f2;
    border-radius: 0.15rem;
    margin-top:0.17rem;
    color:#666;
    display: flex;
    span{
        padding:0.12rem!important;
        font-size: 0.3rem!important;
    }
    .juan{
        color:#ff464e;
        font-weight: 600;
        line-height: 0.56rem;
        padding-right:0.05rem;
    }
    .sousuo{
        line-height: 0.56rem;
    }
}
.fl{
    margin-top:0.17rem;
    font-size: 0.5rem!important;
}
</style>

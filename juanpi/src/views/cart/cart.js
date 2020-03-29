export default{
    state:{
        car:[]
    },
    getters:{},
    actions:{

    },
    mutations:{
        add(state,goods){
            if(state.car.length===0){  //购物车为空
                state.car.push(goods);
                return;
            }
            this.$router.push({name:'cart',query:this.list})
            // localStorage.setItem("car",JSON.stringify(this.list))
            console.log(this.list)
        },
    }
}
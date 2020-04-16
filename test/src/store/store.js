import Vue from "vue"
import Vuex from "vuex"
import Axios from "axios"

Vue.use(Vuex);  //use()메서드 : node --> express에서 ...플러그인 등록

export const store = new Vuex.Store({
    state : {
    products : [],
  },
    mutations: {
        'SET_STORE'(state, products){
            state.products = products;
        }
    },
    actions: { //비동기 통신
        intStore:({commit})=>{
            Axios.get('./static/products.json')
            .then((res)=>{
                console.log(res.data.products);
                commit('SET_STORE', res.data.products);
            })
        }
    },
    getters: {

    }
});

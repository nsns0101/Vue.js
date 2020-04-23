import Vue from "vue"
import Vuex from "vuex"
import products from "./modules/products";
Vue.use(Vuex);  //use()메서드 : node --> express에서 ...플러그인 등록

export const store = new Vuex.Store({
    modules: {
        products,
    }
});

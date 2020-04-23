import Axios from "axios"

const state = {

}

const mutations = {
    'SET_STORE'(state, products){
        state.products = products;
    }
}
const actions = { //비동기 통신
    intStore:({commit})=>{
        Axios.get('./static/products.json')
        .then((res)=>{
            console.log(res.data.products);
            commit('SET_STORE', res.data.products);
        })
    }
}
const getters = {
    products: state => state.products
}

export default {
    state,
    getters,
    actions,
    mutations
}
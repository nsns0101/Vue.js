import axios from "axios";

export default ({params, store}) => {
    //context 객체의 params, store 키를 가지고 있는 데이터만 참조
    //params = routes.params
    //store = Vuex Store의 인스턴스

    return axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
    .then((res)=>{
        console.log(res.data.results);
        store.commit('add', res.data.results); //mutations의 payload 부분
    });
}
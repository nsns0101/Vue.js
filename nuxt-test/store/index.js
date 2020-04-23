import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state : {
            albums: [],
        },
        mutations : {
            add(state, payload){ //첫번째 파라미터는 무조건 state
                state.albums = payload;
            }
        }
    });
}

export default createStore;
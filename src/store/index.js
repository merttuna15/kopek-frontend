import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);


axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const store = new Vuex.Store({
    state:{
        access:'',
        refresh:''
    },
    mutations:{
        initializeStore(state) {
            if( localStorage.getItem('access')){
                state.access = localStorage.getItem('access')
            }
            else{
                state.access = ''
            } 
        },
        setAccess(state, access){
            state.access = access
        },
       
        
    },
    actions: {
        updateToken (state, payload) {
            state.access = payload.access;
            state.refresh = payload.refresh;
            localStorage.setItem('access', payload.access)
            localStorage.setItem('refresh', payload.refresh)

        },
        logOut (state) {
            state.access = null
            state.refresh = null
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
        }
    },
    modules: {
        
    }
})
export default store;
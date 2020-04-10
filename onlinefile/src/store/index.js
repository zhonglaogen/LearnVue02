import Vue from "vue"
import Vuex from "vuex"
import fa from "element-ui/src/locale/lang/fa";

Vue.use(Vuex)

const state = {
    message: 'xxxx',
    isLogin: false,
    isRegist: false,
    curOptUser: ''
}

const store = new Vuex.Store({
    state,
    mutations: {
        toRegist(state){
            state.isRegist = true;
        },
        changeUser(state,payload){
            state.curOptUser = payload.user
        },
        loginout(state){
            state.curOptUser = ''
        }

    },
    actions: {
        userLogin(context,payload){
            context.commit('changeUser',payload)
        }

    },
    getters: {
        checkLogin(state,getter){
            return state.isLogin
        },
        checkRegist(state,getter){
            return state.isRegist
        },
        curOptUser(state,getter){
            return state.curOptUser
        }
    }
})

export default store

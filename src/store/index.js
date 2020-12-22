import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../plugins/firebaseConfig'
import router from '../router/index'


Vue.use(Vuex)

const store =  new Vuex.Store({
  state: {
    userProfile: {}
  },
  mutations: {
    setUserProfile(state, val){
      state.userProfile = val
    }
  },
  actions: {
    async login({ dispatch }, form){
      //sing in
      const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)
      dispatch('fetchUserProfile', user)
    },
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get()

      // seta user profile
      commit('setUserProfile', userProfile.data())

      // muda rota pra home
      if (router.currentRoute.path === '/login') {
        router.push('/')
      }
    },
    async signup({ dispatch }, form) {
      const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)

      // cria objeto na coleçao de users
      await fb.usersCollection.doc(user.uid).set({
        name: form.name,
        email: form.email,
        school: form.school
      })
      dispatch('fetchUserProfile', user)
    },
  },
  modules: {
  }
})

export default store
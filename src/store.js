import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const USERNAME = 'admin',
      PASSWORD = 'admin'

const store = new Vuex.Store({
  state: {
    auth: false,
    posts: [],
    notifi: null
  },
  mutations: {
    setAuth: function(state, authState) {
      state.auth = authState
    },
    notify: function(state, message) {
      state.notifi = message
    },
    clearNotifi: function(state) {
      state.notifi = null
    },
    createPost: function(state, payload) {
      state.posts.push(payload)
    },
    updatePost: function(state, payload) {
      var index = payload.id
      if (index) {
        delete payload.id
        state.posts[index] = payload
      }
    },
    deletePost: function(state, index) {
      state.post.splice(index, 1)
    }
  },
  getters: {
    post: function(state) {
      return function(index) {
        return state.posts[index]
      }
    }
  },
  actions: {
    login: function(context, payload) {
      if (payload && payload.username == USERNAME && payload.password == PASSWORD) {
        context.commit('setAuth', true)
        context.commit('notify', 'Login success !')
      }
      else {
        context.commit('notify', 'Login failed ! Try \'admin\', \'admin\'')
      }
    },
    logout: function(context) {
      context.commit('setAuth', false)
    },
    createPost: function(context, payload) {
      context.commit('createPost', payload)
    },
    updatePost: function(context, payload) {
      context.commit('updatePost', payload)
    },
    deletePost: function(context, payload) {
      context.commit('deletePost', payload)
    }
  }
})

export default store
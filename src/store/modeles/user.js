import { setLocalStrong, removeLocalStorage } from '@/utility/localStorage'
import request from '@/utility/request'

// initial state
const state = {
  user: null
}

// getters
const getters = {
  getUser (state) {
    return state.user
  }
}

// actions
const actions = {
  loginRequest (state, { email, password }) {
    return request('post', '/login', {
      email,
      password
    })
  }
}

// mutations
const mutations = {
  setUser (state, user) {
    setLocalStrong('u', JSON.stringify(user))
    state.user = user
  },
  removeUser (state) {
    removeLocalStorage('u')
    state.user = null
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

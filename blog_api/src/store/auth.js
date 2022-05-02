const authModule = {
  state: {
    token: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : null,
    user: sessionStorage.getItem('user') ? sessionStorage.getItem('user') : null,
  },
  mutations: {
    setAuth(state, data) {
      sessionStorage.setItem('token',data.token)
      sessionStorage.setItem('user',data.user)
      state.user = data.user
      state.token = data.token
    },
    removeAuth(state) {
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('user')
      state.user = null
      state.token = null
    }
  },
  getters: {
    getAuth(state) {
      return state.user;
    }
  },
  actions: {}
}
export default authModule;
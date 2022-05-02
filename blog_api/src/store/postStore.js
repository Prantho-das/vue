import axios from "axios";

const postModule = {
  state: {
    post: null,
  },
  mutations: {
    setPost(state, data) {
      state.post = data;
    },
  },
  getters: {
    getSixPost(state) {
      return state.post?.filter((val, i) => {
        if (i <= 5) {
          return val;
        }
      });
    },
    getAllPost: (state) => (filter = null) => {
      if (!filter) {
        return state.post;
      }
      return state.post?.filter((val) => {
        if (val.post_type === filter) {
          return val;
        }
      });
    },
    getSearchPost: (state) => (filter = null) => {
      if (!filter) {
        return state.post;
      }
      return state.post?.filter((val) => {
        if ((val.title).includes(filter)) {
          //console.log(val)
          return val
        }
      });
    }
  },
  actions: {
    async fetchPost({ commit }) {
      commit("loadingToggle", true);
      try {
        const result = await axios.get("api/post");
        commit("setPost", result.data);
        commit("loadingToggle", false);
      } catch (error) {
        commit("loadingToggle", false);
      }
    },
  },
};
export default postModule;

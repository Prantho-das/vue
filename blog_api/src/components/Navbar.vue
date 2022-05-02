<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">Blog-Laravel</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <template v-if="auth===null">
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/login"
                >Login</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/register"
                >Register</router-link
              >
            </li>
          </template>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/blog"
              >Blog</router-link
            >
          </li>
          <li class="nav-item" v-if="auth">
            <button class="btn nav-link" @click="logout">Log out</button>
          </li>
        </ul>
        <form class="d-flex me-3" @submit.prevent="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="query"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <router-link to="/" v-if="auth">
          <div class="rounded-circle avatar my-2">
            <img src="../assets/logo.png" class="w-100 img-fluid" alt="" />
          </div>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed, reactive, toRefs } from "@vue/runtime-core";
import {useStore} from "vuex"
import {useRouter} from "vue-router"
export default {
  name: "Navbar",
  setup() {
    const store=useStore()
    const router=useRouter()
    let data=reactive({
      query:''
    })
    function logout() {
      store.commit("removeAuth");
    }
    function search() {
      router.replace({name:"search",query:{name:data.query}})
    }
    let auth = computed(() => store.getters.getAuth);
    console.log(auth)
    return {
      logout,
      auth,
      search,
      ...toRefs(data)
    };
  },
};
</script>

<style scoped>
.avatar {
  width: 2rem;
  height: 2rem;
  border: 2px solid blue;
  position: relative;
  overflow: hidden;
}
.avatar img {
  object-fit: cover;
  object-position: top center;
}
</style>

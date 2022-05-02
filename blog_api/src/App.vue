<template>
  <div class="loading_preloader" v-if="$store.state.loading">
    <Spinner />
  </div>
  <header>
    <Navbar />
  </header>
  <main class="bg-light">
    <router-view></router-view>
  </main>
  <footer>
    <Footer/>
  </footer>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Spinner from "./components/Spinner.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Spinner,
    Footer
  },
  data() {
    return {};
  },
  mounted() {
    if(!this.$store.state.postModule.post){
      this.$store.dispatch("fetchPost");
    }
  },
};
</script>

<style>
main {
  min-height: 100vh;
}
.loading_preloader {
  position: fixed;
  top: 0rem;
  left: 0rem;
  right: 0rem;
  min-height: 100vh;
  z-index: 1111;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(blue 25%, skyblue 65%, white 10%);
}
a{
  text-decoration: none !important;
}
</style>

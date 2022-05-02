<template>
  <section class="banner">
    <h2 class="title">Search</h2>
  </section>
  <section class="inner_blog py-3">
    <div class="col-md-10 mx-auto">
      <div class="col-md-3 mr-auto mb-3">
        <select class="form-control" v-model="filter">
          <option value="" selected>Please Select Post Type</option>
          <option value="pp">PP</option>
          <option value="prantho">Prantho</option>
        </select>
      </div>
      <div class="row gx-3" v-if="posts && posts.length > 0">
        <div
          class="col-xxl-3 col-lg-4 col-sm-6 col-12 mb-3"
          v-for="(post, i) in posts"
          :key="i"
        >
          <PostCard
            :title="post.title"
            :description="post.description"
            :slug="post.slug.toString()"
            :image="post.image"
          />
        </div>
      </div>
      <h3 class="text-center" v-else>No Post Found</h3>
    </div>
  </section>
</template>

<script>
import PostCard from "../components/PostCard.vue";

export default {
  name: "SearchPage",
  components: {
    PostCard,
  },
  data() {
    return {
      filter: "",
      posts: "",
    };
  },
  mounted() {
    let search = this.$route.query.name;
    this.postSearch(search);
  },
  watch: {
    $route(to, from) {
      if (to) {
        let search = this.$route.query.name;
        this.postSearch(search);
        console.table(from)
      }
    },
  },
  methods: {
    postSearch(search) {
      this.posts = this.$store.getters.getSearchPost(search ? search : null);
    },
  },
};
</script>

<style scoped>
.banner {
  height: 55vh;
  max-height: 55vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url("../assets/doctor.jpg");
}
.title {
  z-index: 999;
  font-size: 2.5rem;
  color: white;
}
</style>

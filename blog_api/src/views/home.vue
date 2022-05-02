<template>
  <Carousel />
  <section class="py-5">
    <div class="col-md-10 col-12 mx-auto">
      <div class="row">
        <div class="col-md-8 col-12 posts">
          <div class="row gx-3">
            <div
              class="col-xxl-3 col-lg-4 col-sm-6 col-12 mb-3"
              v-for="(post, i) in getSixPost"
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
        </div>
        <div class="col-md-4 position-sticky col-12 widgets mt-2">
          <div class="card categories">
            <div class="card-header">Categories</div>
            <div class="card-body">
              <router-link v-for="category,i in categories" :to="'/blog/'+category.id" :key="i" class="badge badge-info bg-dark">{{category.category_name}}</router-link>
            </div>
          </div>
          <div class="card tags mt-3">
            <div class="card-header">Tags</div>
            <div class="card-body">
              <router-link v-for="tag,i in tags" :to="'/blog/'+tag.id" :key="i" class="badge badge-pill me-1" :class='classColor[Math.floor(Math.random()*i)]'>{{tag.tag_name}}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Carousel from "../components/sections/Carousel";
import PostCard from "../components/PostCard.vue";
import axios from "axios";
export default {
  name: "HomePage",
  components: {
    Carousel,
    PostCard,
  },
  data() {
    return {
      categories: "",
      tags: "",
      classColor:[
        'bg-info',
        'bg-secondary',
        'bg-danger',
        'bg-light',
        'bg-success',
        'bg-warning'
      ]
    };
  },
  computed: {
    getSixPost() {
      return this.$store.getters.getSixPost;
    },
  },
  mounted() {
    console.log(this.classColor[Math.floor(Math.random()*6)])
    this.getTagsComments();
  },
  methods: {
    async getTagsComments() {
      try {
        let res = await axios.get("api/category");
        let tres = await axios.get("api/tag");
        this.categories = res.data;
        this.tags = tres.data;
      } catch (error) {
        console.table(error);
      }
    },
  },
};
</script>

<style></style>

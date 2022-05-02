<template>
  <section class="banner" style="background-image: url('../assets/doctor.jpg')">
    <img src="../assets/doctor.jpg" class="h-100 img-fluid" alt="" />
    <h1 class="title">{{ post.title }}</h1>
  </section>
  <section class="col-md-10 mx-auto single_blog_inner p-3">
    <div class="card col-md-4 col-11 float-end d-block">
      <div class="card-body text-center">
        <h3>prantho</h3>
        <h6>{{ post.created_at }}</h6>
      </div>
    </div>
    <div class="description" v-html="post.description"></div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "SinglePost",
  data() {
    return {
      id: "",
      post: {
        type: Object,
        default: null,
      },
      comment: {
        type: Array,
        default: null,
      },
    };
  },
  async mounted() {
    try {
      let slug = this.$route.params.id;
      const res = await axios.get(`api/post/${slug}`);
      this.post = res.data.post;
      this.comment = res.data.comment;
      console.log(res);
    } catch (error) {
      console.log(error);
    }
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
}
.banner img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-attachment: fixed;
  object-fit: cover;
  object-position: center center;
}
.title {
  z-index: 999;
  font-size: 2.5rem;
  color: white;
}
</style>

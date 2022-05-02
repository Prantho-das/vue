<template>
  <router-link :to="{ name: 'singlePost', params: { id: slug } }">
    <div
      class="card shadow rounded"
      style="width: 15rem; height: fit-content !important"
    >
      <figure>
        <img v-if='image'
          :src="'http://127.0.0.1:8000/storage/'+image.image_link"
          class="card-img-top img-fluid h-100"
          alt="..."
        />
        <img v-else
          src="../assets/doctor.jpg"
          class="card-img-top img-fluid h-100"
          alt="..."
        />
      </figure>
      <div class="card-body">
        <h4 class="card-title">{{ title }}</h4>
        <p class="text-end">-- 30/4/22|09:48pm</p>
        <p class="card-text">
          {{ description.slice(0, 50) }}
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    slug: {
      type: String,
    },
    image: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped>
figure {
  height: 10rem !important;
  margin-bottom: 0rem !important;
}
@media screen and (max-width: 500px) {
  .card {
    width: 20rem !important;
    margin: auto;
  }
}
</style>

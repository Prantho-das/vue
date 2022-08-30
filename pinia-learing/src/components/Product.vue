<script setup>
import { cartStore } from "../store/Cart";
const cartS = cartStore();
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="card is-pointer" @click="()=>cartS.addToCart(product.id)">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="product.image" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-5">{{ product.title }}</p>
          <p class="title is-6">{{ product.price }}</p>
          <p class="subtitle is-6">{{ product.category }}</p>
        </div>
      </div>

      <div class="content">
        <details>
          <summary>
            {{ product.description.slice(0, 50) + "..." }}
          </summary>
          {{ product.description }}
        </details>

        <br />
        <h6>
          Rating:
          <a href="#">({{ product.rating.rate }})</a>
          <a href="#">/{{ product.rating.count }}</a>
        </h6>
        <!-- <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
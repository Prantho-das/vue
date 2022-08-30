<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import { mapActions, storeToRefs } from "pinia";
import Product from "./components/Product.vue";
import { cartStore } from "./store/Cart.js";
const cartS = cartStore();
const { cartItem, getCartItems, products, cartTotal, getTotalAmount } =
  storeToRefs(cartS);
const sideBarActive = ref(false);
console.log(sideBarActive.value);
onMounted(async () => {
  let { result, error } = await cartS.getProduct();
});
</script>

<template>
  <section>
    <div class="container">
      <h3 class="is-text-center mt-3 title">All Products</h3>

      <button
        class="is-text-right mb-4 button is-success is-light"
        v-if="cartTotal"
        @click="sideBarActive = !sideBarActive"
      >
        Total Cart: {{ cartTotal }}
      </button>
      <div class="columns is-multiline">
        <div
          class="column is-3-desktop is-3"
          v-for="(product, i) in products"
          :key="i"
        >
          <Product :product="product" />
        </div>
      </div>
      <aside
        class="left-side"
        :style="sideBarActive && cartTotal ? 'width:30%;padding:1rem;' : 'width:0%'"
      >
        <h3 class="title is-5">All Cart</h3>
        <div class="columns is-multiline aside-scroll">
          <div
            class="column is-12"
            v-for="(product, i) in getCartItems"
            :key="i"
          >
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <div class="is-flex is-justify-content-space-between">
                    <h6 class="w-full">{{ product.name }}</h6>
                    <span
                      class="is-pointer"
                      @click="cartS.removeCartItem(product.id)"
                      >&#10008;</span
                    >
                  </div>
                  <div class="is-flex is-justify-content-space-between">
                    <p>Quantity: {{ product.quantity }}</p>
                    <p>Price: {{ product.price }} $</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h5 class="is-6 title m-2" v-if="getCartItems.length === 0">
            No Item Added
          </h5>
        </div>
        <div class="card">
          <div class="card-content">
            <div class="is-text-right">
              <h2>Sub-Total: {{ getTotalAmount }} $</h2>
              <h2>Vat: {{ getTotalAmount * 0.6 }} $</h2>
              <h2>Total: {{ getTotalAmount + getTotalAmount * 0.6 }} $</h2>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.left-side {
  position: fixed;
  top: 0;
  right: 0px;
  bottom: 0px;
  background: rgb(243, 243, 243);
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}
.aside-scroll {
  height: 80%;
  overflow-y: auto;
}
</style>
<template>
  <section class="p-3 text-light text-center bg-dark">
    <h6>&copy; All Copyrights belongs to pranthokumar | {{time}}</h6>
  </section>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
name:"Footer",
setup(){
  let time=ref(new Date().toLocaleTimeString())

  setInterval(() => {
    time.value=new Date().toLocaleTimeString()
  }, 1000);
  return {time}
}
}
</script>

<style>

</style>
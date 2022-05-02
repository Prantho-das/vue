<template>
  <h1>About</h1>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      form: {
        profile: [
          {
            name: "prantho",
            phone: "0812341234",
          },
        ],
      },
    };
  },
  mounted() {
    fetch("http://localhost:8000/api/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": '*',
      },
      data: JSON.stringify(this.form),
    }).then((res) => console.log(res));
  },
};
</script>

<style>
</style>
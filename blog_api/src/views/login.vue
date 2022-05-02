<template>
  <section>
    <div class="col-md-6 mx-auto card">
      <form class="m-3" @submit.prevent="login">
        <h2 class="text-center">Login Page</h2>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            v-model="email"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <h6 class="text-danger" v-if="error && error.email">
          {{ error.email[0] }}
        </h6>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            v-model="password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <h6 class="text-danger" v-if="error && error.password">
          {{ error.password[0] }}
        </h6>

        <button class="btn btn-success mt-3">Login</button>
      </form>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    login() {
      this.$store.commit("loadingToggle", true);
      axios
        .post("api/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          if (res.data) {
            axios
              .get("api/user", {
                headers: {
                  Authorization: "Bearer " + res.data,
                },
              })
              .then((resp) => {
                this.$store.commit("setAuth", {
                  token: res.data,
                  user: resp.data,
                });
                this.$router.replace("/");
                this.$store.commit("loadingToggle", false);
              })
              .catch((error) => {
                this.$store.commit("loadingToggle", false);
                console.log(error.response);
              });
          }
        })
        .catch((error) => {
          if (error.response.status == 422) {
            this.error = error.response.data.errors;
          }
        });
    },
  },
};
</script>

<style scoped></style>

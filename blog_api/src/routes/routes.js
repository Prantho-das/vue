import HomePage from "../views/home.vue";

import LoginPage from "../views/login.vue";
import About from "../views/about.vue";
import RegisterPage from "../views/register.vue";
import NotFound from "../views/notfound.vue";
import BlogPage from "../views/blog.vue";
import SearchPage from "../views/search.vue";
import SinglePost from "../views/singlepost.vue";
const routes = [
  { path: "/", component: HomePage },
  { path: "/blog", component: BlogPage },
  { path: "/search",name:"search", component: SearchPage },
  { path: "/blog/:id", name: "singlePost", component: SinglePost },
  { path: "/about", component: About },
  { path: "/login", component: LoginPage, meta:"guest" },
  { path: "/register", component: RegisterPage,meta:"guest" },
  { path: "/:catchAll(.*)", component: NotFound },
];
export default routes;

import Vue from 'vue';
import Router from "vue-router";
import Home from "../views/Home";
import Advanced from "../views/Advanced";
import About from "../views/About";




Vue.use(Router);

export default new Router({
    routes: [
        {path: "/", name: "Home", component: Home},
        {path: "/Advanced", name: "Advanced/:cityName",component: Advanced},
        {path: "/About",name: "About", component: About},
    ]
})
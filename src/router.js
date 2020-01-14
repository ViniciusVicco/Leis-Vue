import Vue from 'vue';
import VueRouter from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Index from "./components/Index";
//Vue precisa utilizar um componente
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },

        {
            path: '/helloWorld',
            name: 'helloWorld',
            component: HelloWorld
        },
    ]
})
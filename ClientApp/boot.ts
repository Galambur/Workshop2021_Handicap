import './css/site.css';
import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    { path: '/', component: require('./components/home/home.vue.html') },
    { path: '/daltonisme', component: require('./components/daltonisme/daltonisme.vue.html') },
    { path: '/cataracte', component: require('./components/Cataracte/cataracte.vue.html') },
    { path: '/dmla', component: require('./components/dmla/dmla.vue.html') },
    { path: '/dyslexie', component: require('./components/dyslexie/dyslexie.vue.html') },
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue.html'))
});

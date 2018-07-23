import App from './App.vue';
import AddBook from './components/AddBook.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

export default new VueRouter({
	routes:[
	{ path:'/', component: App },
	{ path:'/book/add', component: AddBook },
]});

import App from './App.vue';
import AddBook from './components/AddBook.vue';
import EditBook from './components/EditBook.vue';
import ViewBook from './components/ViewBook.vue';
import ListBooks from './components/ListBooks.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

export default new VueRouter({
	routes:[
	{ path:'/', component: ListBooks },
	{ path:'/book/add', component: AddBook },
	{ path:'/book/:id/edit', component: EditBook, name:'EditBook' },
	{ path:'/book/:id/view', component: ViewBook, name:'ViewBook' },
]});

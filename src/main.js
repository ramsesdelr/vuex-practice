import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import AddBook from './components/AddBook.vue';
import { store } from './store/index.js';
import router from './routes.js';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(Vuex);

new Vue({
 	store,
 	components: {App, AddBook},
 	el: '#app',
	render: h => h(App),
	router,
});
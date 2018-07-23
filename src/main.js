import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import Vuex from 'vuex';
import AddBook from './components/AddBook.vue';
import { store } from './store/index.js';
import router from './routes.js';

Vue.use(Vuex);

new Vue({
 	store,
 	components: {App, AddBook},
 	el: '#app',
	render: h => h(App),
	router,
});
<template>
	<div>
		<nav aria-label="Page navigation example">
		  <ul class="pagination">
		      <li v-for="number in total_pages"class="page-item">
		      	<a class="page-link" v-on:click="goToPage(number)">{{ number }}</a>
		      </li>
		  </ul>
		</nav>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	import { mapGetters } from 'vuex'

	export default {
		name:'Pagination',
		computed: {
			 ...mapGetters([
		      	'getPerPage',
	   	 	])
		},
		props: ['booksLength'],
		data() {
			return {
				total_pages:0,
			}
		},
		mounted: function() {
			this.getPages(this.booksLength);
		},
		methods:{
			...mapActions([
	      		'updatePageInStore',
	      	]),
			getPages(books_length){
				this.total_pages = Math.ceil(books_length/this.getPerPage);
			},
			goToPage(selectedPage){
				this.updatePageInStore(selectedPage);
			}
		}
	}
</script>
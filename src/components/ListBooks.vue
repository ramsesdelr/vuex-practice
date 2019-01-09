<template>
	<div class="container">
		<router-link :to="{name: 'AddBook'}">
			<button class="btn btn-primary move-right">Add Book</button>
		</router-link>
		<input type="text" class="form-control" v-on:keyup="searchBooks" v-model="search" name="search" placeholder="Search...">
		<br>
		<table class="table table-bordered">
			<thead>
				<tr>
					<th>Title</th>
					<th>Author</th>
					<th>Creation</th>
					<th>Options</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="book in books">
					<td> 
					<router-link :to="{name: 'ViewBook', params: {id: book.id } }">
						<a>{{book.title}}</a></router-link>
					</td>
					<td>{{book.author}}</td>
					<td>{{book.creation_date}}</td>
					<td>
						<router-link :to="{name: 'EditBook', params: { id: book.id } }">
						<a>Update</a></router-link></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import { mapActions } from 'vuex'

	export default {
		name:'BooksList',
		computed:mapState({
			books(state){
				return state.booksResult;
			},
		}),
		data() {
			return {
				title:'',
				author:'',
				creation_date:'',
				search:'',
			}
		},
		methods: {
			...mapActions([
	      		'searchBooksInStore',
	      ]),
			searchBooks() {
				this.searchBooksInStore(this.search);
			}
		},
		mounted() {
			this.searchBooks();
		}

	}
</script>
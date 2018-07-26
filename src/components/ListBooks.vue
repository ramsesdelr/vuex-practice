<template>
	<div class="container">
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
	export default {
		name:'BooksList',
		computed:{
			books(){
				return this.$store.state;
			}
		},
		data() {
			return {
				title:'',
				author:'',
				creation_date:'',
			}
		},
	}
</script>
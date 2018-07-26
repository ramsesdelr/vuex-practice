<template>
	<div class="container">
		<router-link :to="{path: '/' }"><a>Back</a></router-link>
		<table class="table table-bordered">
			<thead>
				<tr>
					<th>Title</th>
					<th>Author</th>
					<th>Creation</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{{book.title}} - <b>ISBN:</b> {{book.isbn}}</td>
					<td>{{book.author}}</td>
					<td>{{book.description}}</td>
					<td>{{book.creation_date}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		name:'BookEdit',
		computed:{
			book(){
				return this.$store.state.find(result => {
					return result.id == this.$route.params.id;
				});
			}
		},
		data() {
			return {
				bookDetail:{
				}
			}
		},
	}
</script>
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
					<td>{{bookDetail.title}} - <b>ISBN:</b> {{bookDetail.isbn}}</td>
					<td>{{bookDetail.author}}</td>
					<td>{{bookDetail.description}}</td>
					<td>{{bookDetail.creation_date}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import { mapGetters } from 'vuex'
	export default {
		name:'BookView',
		computed: {
			 ...mapGetters([
		      	'getCurrentBook',
	   	 	])
		},
		data() {
			return {
				bookDetail:{
				}
			}
		},
		mounted: function() {
			this.bookDetail = this.getCurrentBook(this.$route.params.id);
		}
	}
</script>
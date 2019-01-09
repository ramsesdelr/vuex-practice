<template>
	<div class="container">
		<router-link :to="{path: '/' }"><a>Back</a></router-link>

		<form class="form-control" v-on:submit.prevent="updateBook">
			<label for="title"><b>Title:</b> </label> <br>
			<input type="text" name="title" v-model="bookDetail.title" size="60"> <br>
			<label for="author"><b>Author:</b></label> <br>
			<input type="text" name="author" v-model="bookDetail.author"> <br>
			<label for="isbn"><b>ISBN:</b></label> <br>
			<input type="text" name="isbn" v-model="bookDetail.isbn"> <br>
			<label for="title"><b>Description:</b></label> <br>
			<textarea name="description" class="description-box" v-model="bookDetail.description"></textarea>
			<br>
			<button class="btn btn-primary">Update</button>
		</form>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import { mapGetters } from 'vuex'
	import { mapActions } from 'vuex'
	
	export default {
		name:'BookEdit',
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
		},
		methods: {
		...mapActions([
	      		'updateBookInStore',
	      ]),
			updateBook(e){
				if (e) e.preventDefault();
				this.updateBookInStore(this.bookDetail);
				this.$router.push('/')
			}
		},
	}
</script>
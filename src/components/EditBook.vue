<template>
	<div class="container">
		<router-link :to="{path: '/' }"><a>Back</a></router-link>

		<form class="form-control" v-on:submit.prevent="updateBook">
			<label for="title"><b>Title:</b> </label> <br>
			<input type="text" name="title" v-model="book.title" size="60"> <br>
			<label for="author"><b>Author:</b></label> <br>
			<input type="text" name="author" v-model="book.author"> <br>
			<label for="isbn"><b>ISBN:</b></label> <br>
			<input type="text" name="isbn" v-model="book.isbn"> <br>
			<label for="title"><b>Description:</b></label> <br>
			<textarea name="description" class="description-box" v-model="book.description"></textarea>
			<br>
			<button class="btn btn-primary">Update</button>
		</form>
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
		methods: {
			updateBook(e){
				if (e) e.preventDefault();
				this.$store.commit('updateBook', this.book);
				this.$router.push('/')
			}
		},
	}
</script>
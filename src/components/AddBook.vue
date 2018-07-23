<template>
	<div>{{bookList}}</div>
</template>
<script>
export default {
	computed: {
		bookList(){
			return this.$store.state;
		}
	}
}
</script>
<template>
	    <router-view></router-view>
</template>

<script>
import { mapState, mapMutations} from 'vuex';

export default {
	computed: mapState({
		number(state) {
			return state.storedNumber;
		}
	}),
	methods: {
		...mapMutations([
			'incrementNumber',
			'setNumber'
		]),

	},
	actions: {
		async setNumberToRemoteValue(context) {
			context.commit('setNumber', await myRemoteService.getRemoteValue())
		}
	}
}

</script>
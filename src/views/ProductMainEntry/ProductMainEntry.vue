<template>
	<v-product-layout :cartCountBadge="cartItems.length">
		<router-view></router-view>
	</v-product-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

import { VProductLayout } from '@/components/Layout/ProductLayout';
import { API_PATHS } from '@/constants/api-paths';
import { Auth } from '@/constants/auth';
export default Vue.extend({
	name: 'ProductMainEntry',
	components: { VProductLayout },
	computed: {
		...mapGetters(['cartErrorMessage']),
		...mapGetters(['cartItems']),
	},
	created() {
		this.fetchInitialCart();
	},
	watch: {
		cartErrorMessage(message: string) {
			if (message) {
				this.$store.dispatch('snackbar/showErrorSnackber', { message });
			}
		},
	},
	methods: {
		fetchInitialCart() {
			this.$store.dispatch('cart/fetchCart');
		},
	},
	mounted() {
		if (this.$route.query.code) {
			console.log('aaa');
			this.$store.dispatch('auth/getToken', this.$route.query.code);
		}
	},
});
</script>

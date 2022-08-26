<template>
	<v-menu left bottom>
		<template v-slot:activator="{ on, attrs }">
			<v-btn
				class="ma-2 pa-2"
				icon
				large
				v-bind="attrs"
				v-on="on"
				data-test-id="login-button"
				aria-haspopup="true"
			>
				<v-icon @click="onLogin">login</v-icon>
			</v-btn>
		</template>
	</v-menu>
</template>

<script lang="ts">
import Vue from 'vue';
import { API_PATHS } from '@/constants/api-paths';
import { Auth } from '@/constants/auth';
export default Vue.extend({
	name: 'LoginButtonMenu',
	methods: {
		onLogin() {
			const AuthPath = `${API_PATHS.auth}login?client_id=${Auth.clientId}&response_type=code&scope=email+openid+phone+aws.cognito.signin.user.admin+profile&redirect_uri=${window.location.origin}`;
			window.location.href = AuthPath;
		},
	},
});
</script>

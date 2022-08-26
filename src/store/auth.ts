import type { Module } from 'vuex';
import { token } from '@/api/auth-api';
import { AxiosResponse } from 'axios';
export const authModuleStore: Module<any, any> = {
	namespaced: true,
	state: {
		isAuth: false,
	},
	getters: {
		isAuth(state) {
			return state.isAuth;
		},
	},
	mutations: {
		setIsAuth(state, auth) {
			state.isAuth = auth;
		},
	},
	actions: {
		getToken({ commit }, code: string) {
			token(code).then((data: AxiosResponse) => {
				if (data.status === 200) {
					console.log(data);
					commit('setIsAuth', true);
				} else {
					commit('setIsAuth', false);
				}
			});
		},
	},
};

import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

import { API_URL } from '@/API'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		packages: [],
		isLoading: false,
		currentPackage: {},
		packageIsLoading: false,
	},
	mutations: {
		fetchPackages(state, payload) {
			state.packages = payload
		},
		fetchPackageInfo(state, payload) {
			state.currentPackage = payload
		},
		setLoading(state, payload) {
			state.isLoading = payload
		},
		setPackageLoading(state, payload) {
			state.packageIsLoading = payload
		},
	},
	actions: {
		async fetchQuery({ commit }, querytext) {
			commit('setLoading', true)
			try {
				await axios.get(`${API_URL.searchUrl(querytext)}`).then(res => {
					commit('fetchPackages', res.data.objects)
					commit('setLoading', false)
				})
			} catch (error) {
				commit('setLoading', false)
				console.log(error)
			}
		},
		async getPackageInfo({ commit }, payload) {
			commit('setPackageLoading', true)
			try {
				await axios.get(`${API_URL.packageStats(payload.name)}`).then(res => {
					commit('fetchPackageInfo', { ...res.data, ...payload })
					commit('setPackageLoading', false)
				})
			} catch (error) {
				console.log(error)
			}
		},
	},
	getters: {
		packages: state => state.packages,
		currentPackage: state => state.currentPackage,
		isLoading: state => state.isLoading,
		packageIsLoading: state => state.packageIsLoading,
	},
})

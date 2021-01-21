import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		packages: [],
		isLoading: false,
		currentPackage: {},
	},
	mutations: {},
	actions: {},
	getters: {
		packages: state => state.packages,
		currentPackage: state => state.currentPackage,
		isLoading: state => state.isLoading,
	},
})

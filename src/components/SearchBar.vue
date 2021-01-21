<template>
	<v-text-field
		class="pt-2 pb-2"
		v-model="searchTitle"
		@keyup.enter="getSearchQuery"
		@click:append="getSearchQuery"
		label="Search a package"
		hint="For example, jquery or vue-carousel"
		append-icon="mdi-magnify"
		outlined
		clearable
	></v-text-field>
</template>

<script>
export default {
	name: "SearchBar",
	data() {
		return {
			searchTitle: "",
		};
	},
	methods: {
		getSearchQuery() {
			/* make query */
			this.searchTitle = "";
		},
	},
};
</script>
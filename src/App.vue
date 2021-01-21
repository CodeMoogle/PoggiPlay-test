<template>
	<v-app>
		<v-main class="pa-1">
			<SearchBar />
			<PackageList />
		</v-main>
	</v-app>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import PackageList from "@/components/PackageList";

export default {
	name: "App",
	components: {
		SearchBar,
		PackageList,
	},
};
</script>

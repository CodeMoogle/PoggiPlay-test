<template>
	<v-app>
		<v-main class="pa-1">
			<SearchBar />
			<PackageList />
		</v-main>
		<Footer />
	</v-app>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import PackageList from "@/components/PackageList";
import Footer from "@/components/Footer";

export default {
	name: "App",
	components: {
		SearchBar,
		PackageList,
		Footer,
	},
};
</script>

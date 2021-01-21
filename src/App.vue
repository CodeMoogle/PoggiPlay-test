<template>
	<v-app>
		<v-main class="pa-1">
			<SearchBar />
		</v-main>
	</v-app>
</template>

<script>
import SearchBar from "@/components/SearchBar";

export default {
	name: "App",
	components: {
		SearchBar,
	},
};
</script>

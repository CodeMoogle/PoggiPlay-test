<template>
	<div class="package-list pt-4" v-if="packages.length">
		<div class="text-center" v-if="packages.length">
			<v-pagination
				v-model="currentPage"
				:length="Math.ceil(packages.length / 10)"
			></v-pagination>
		</div>

		<v-list flat three-line>
			<v-list-item-group multiple active-class="">
				<div
					class="package-list__item"
					v-for="item in paginatedData"
					:key="item.package.name + item.package.version"
				>
					<v-list-item>
						<template>
							<v-list-item-content>
								<v-list-item-title
									class="d-flex justify-space-between text-bold"
									><span>{{ item.package.name }}</span>
									<span>v. {{ item.package.version }}</span></v-list-item-title
								>
								<v-list-item-subtitle>{{
									item.package.description
								}}</v-list-item-subtitle>
							</v-list-item-content>
						</template>
					</v-list-item>
					<v-divider></v-divider>
				</div>
			</v-list-item-group>
		</v-list>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name: "PackageList",
	computed: {
		...mapGetters(["packages", "isLoading"]),
		paginatedData() {
			let start = (this.currentPage - 1) * this.perPage;
			let end = start + this.perPage;

			return this.packages.slice(start, end);
		},
	},
	data() {
		return {
			currentPage: 1,
			perPage: 10,
		};
	},
	watch: {
		packages() {
			this.currentPage = 1;
		},
	},
};
</script>

<style>
</style>
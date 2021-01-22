<template>
	<div class="package-list pt-4">
		<div class="text-center" v-if="packages.length && !isLoading">
			<v-pagination
				v-model="currentPage"
				:length="Math.ceil(packages.length / 10)"
			></v-pagination>
		</div>

		<v-list flat dense three-line v-if="packages && !isLoading">
			<v-list-item-group multiple active-class="">
				<div
					class="package-list__item"
					v-for="item in paginatedData"
					:key="item.package.name + item.package.version"
				>
					<v-list-item @click="openPackageInfo(item)">
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

		<p v-if="isLoading" class="text-center">Loading...</p>

		<!-- modal -->
		<v-dialog class="ma-1" max-width="600" v-model="showModal">
			<template v-slot:default="dialog">
				<v-card>
					<div v-if="!packageIsLoading">
						<v-card-title>{{ currentPackage.name }}</v-card-title>
						<v-card-subtitle
							>Current version {{ currentPackage.version }}</v-card-subtitle
						>
						<v-divider></v-divider>
						<v-card-text>
							<p>
								<span class="font-weight-black">Downloads rank:</span>
								{{ currentPackage.rank || "None" }}
							</p>
							<p>
								<span class="font-weight-black">Total downloads:</span>
								{{ currentPackage.total || "None" }}
							</p>
							<p>
								<span class="d-block mb-1 font-weight-black">Description:</span>
								{{ currentPackage.description || "None" }}
							</p>
							<div>
								<span class="d-block mb-1 font-weight-black">Links:</span>
								<div class="d-flex flex-wrap align-center">
									<a
										v-for="(value, propertyName) in currentPackage.links"
										:key="value + propertyName"
										:href="value"
										target="_blanc"
										><v-chip class="ma-1" color="primary" outlined label>{{
											propertyName
										}}</v-chip></a
									>
								</div>
							</div>
						</v-card-text>
						<v-card-actions class="justify-end">
							<v-btn text @click="dialog.value = false">Close</v-btn>
						</v-card-actions>
					</div>
					<!-- skeleton loader -->
					<v-sheet
						:color="`grey lighten-4`"
						class="pa-3"
						v-if="packageIsLoading"
					>
						<v-skeleton-loader
							class="mx-auto"
							max-width="600"
							type="card"
						></v-skeleton-loader>
					</v-sheet>
				</v-card>
			</template>
		</v-dialog>
	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
	name: "PackageList",
	computed: {
		...mapGetters([
			"packages",
			"currentPackage",
			"isLoading",
			"packageIsLoading",
		]),
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
			showModal: false,
		};
	},
	methods: {
		...mapActions(["getPackageInfo"]),
		openPackageInfo(item) {
			this.getPackageInfo(item.package);
			this.showModal = true;
		},
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
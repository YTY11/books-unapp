<template>
	<view class="profile">
		<!-- 头部 -->
		<PHeader />
		

		<!-- 设置 -->
		<ProflieSet/>
	</view>
</template>

<script>
	//头部组件
	import PHeader from '../../components/proflie/pHeader.vue'
	
	// 设置
	import ProflieSet from '../../components/proflie/proflieSet.vue'
	export default {
		components: {
			PHeader,
			ProflieSet
		},
		data() {
			return {

			};
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.profile {
		
	}

	page {
		background-color: #EFEFEF !important;
	}
</style>

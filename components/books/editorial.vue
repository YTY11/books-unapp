<template>
	<view class="editorial">
		<!-- 主编力荐 -->
		<u-section class="m-section" title="主编力荐" :show-line="false" @click="more"></u-section>
			
		<EdAndPopItem v-for="(item,index) in [1,2,3,4,5]" :key="index"/>
	</view>
</template>

<script>
	//子组件
	import EdAndPopItem from './edAndPopItem.vue'
	export default{
		name:'Editorial',
		components:{
			EdAndPopItem
		},
		methods:{
			//点击更多
			more(){
				console.log("editorial");
			},
		}
	}
</script>

<style lang="scss" scoped>
	.editorial{
		.m-section{
			padding: 20rpx;
			
		}
	}
</style>

<template>
	<view class="editorial">
		<!-- 主编力荐 -->
		<u-section class="m-section" title="主编力荐" :show-line="false" @click="more"></u-section>
			
		<EdAndPopItem v-for="(item,index) in editorialData" :item="item" :key="item.Id"/>
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
		props:{
			editorialData:{
				type:Array,
				default(){
					return[]
				}
			}
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

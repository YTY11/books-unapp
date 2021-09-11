<template>
	<view class="">
		<!-- 为你推荐 -->
		<u-section class="m-section" title="为你推荐" :show-line="false" @click="more"></u-section>
	<view class="books">
		<ToYouBooksItem v-for="(item,index) in dataList" :key="index"/>
	</view>
	</view>
</template>

<script>
	//子组件
	import ToYouBooksItem from './toYouBooksItem.vue'
	export default{
		name:'ToYouBooks',
		components:{
			ToYouBooksItem
		},
		props:{
			dataList:{
				type:Array,
				default(){
					return[]
				}
			}
		},
		methods:{
			//点击更多
			more(){
				console.log("toYouBooks");
			},
		}
	}
</script>

<style lang="scss" scoped>
	.books{
		margin: 20rpx 26rpx;
		display: flex;
		flex-wrap: wrap;
	}
	.m-section{
		padding: 20rpx;
		
	}
</style>

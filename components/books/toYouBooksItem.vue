<template>
	<view class="book-item" @click="goBookDetail(item)">
		<!-- <image src="../../static/img/boots_nav/new_book.png" mode="" /> -->
		<!-- 图片懒加载 -->
		<u-lazy-load class="book-img" :image="item.Img" :loading-img="loadingImg" :error-img="errorImg"></u-lazy-load>
		<text>{{item.Name}}</text>
	</view>
</template>

<script>
	import errorImg from '../../static/img/lazy/placeholderError.png'
	import loadingImg from '../../static/img/lazy/placeholder.png'
	export default {
		name: 'BookItem',
		props:{
			item:{
				type:Object,
				default(){
					return{}
				}
			}
		},
		data(){
			return{
				errorImg:errorImg,
				loadingImg:loadingImg
			}
		},
		methods:{
			//去书籍详情页
			goBookDetail(data){
				data = JSON.stringify(data)
				uni.navigateTo({
					url:`/pages/detail/detail?data=${encodeURIComponent(data)}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.book-item {
		text-align: center;
		display: flex;
		flex-direction: column;
		width: 150rpx;
		margin: 12rpx;

		.book-img {
			width: 150rpx;
			height: 170rpx;
			margin-bottom: 10rpx;
		}
	}
</style>

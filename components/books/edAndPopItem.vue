<template>
	<view class="book" @click="goBookDetail(item)">
		<view class="book-msg">
			<!-- <image class="book-img" src="../../static/img/boots_nav/new_book.png" mode="" /> -->
			<!-- <image class="book-img" v-lazy="item.Img" mode="" /> -->
			<!-- 图片懒加载 -->
			<u-lazy-load class="book-img" :image="item.Img" :loading-img="loadingImg" :error-img="errorImg"></u-lazy-load>
			<view class="book-text">
				<text class="book-name">{{item.Name}}</text>
				<view class="book-author">
					<image src="../../static/img/tabbar/profile_acitve.png" mode=""/>
					<text>{{item.Author}}</text>
					<text class="type">{{item.CName}}</text>
					<text class="state">{{item.BookStatus}}</text>
					<!-- <text class="num">120万字</text> -->
				</view>
				<text class="book-content">{{item.Desc}}</text>
			</view>
		</view>

		<u-gap height="8" bg-color="#EFEFF0"></u-gap>
	</view>
</template>

<script>
	import errorImg from '../../static/img/lazy/placeholderError.png'
	import loadingImg from '../../static/img/lazy/placeholder.png'
	export default {
		name: 'EdAndPopItem',
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
	.book {
		height: 200rpx;
		
		.book-msg {
			display: flex;
				align-items: center;
			.book-img {
				width: 140rpx;
				height: 160rpx;
				border-radius: 10rpx;
				margin: 20rpx;
			}

			.book-text {
				flex: 1;
				height: 160rpx;
				display: flex;
				flex-direction: column;
				align-items: baseline;
				justify-content: space-around;
				padding-right: 20rpx;
				box-sizing: border-box;
				.book-name{
					font-weight: bold;
				}
				.book-author{
					font-size: 25rpx;
					display: flex;
					image{
						width: 30rpx;
						height: 30rpx;
						margin-right: 10rpx;
						margin-bottom: 2rpx;
						vertical-align: bottom;
					}
					.type{
						font-size: 22rpx;
						color: #5BCAEF;
						border: 2rpx solid #5BCAEF;
						border-radius: 10rpx;
						padding: 2rpx;
						box-sizing: border-box;
						margin-left: 20rpx;
					}
					.state{
						font-size: 22rpx;
						color: #E191B6;
						border: 2rpx solid #E191B6;
						border-radius: 10rpx;
						padding: 2rpx;
						box-sizing: border-box;
						margin-left: 20rpx;
					}
					.num{
						font-size: 22rpx;
						color: #8C8E8F;
						border: 2rpx solid #8C8E8F;
						border-radius: 10rpx;
						padding: 2rpx;
						box-sizing: border-box;
						margin-left: 20rpx;
					}
				}
				.book-content{
					font-size: 22rpx;
					color: #9E9E9E;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient:vertical;
					-webkit-line-clamp:2;
				}
			}
		}
	}
</style>

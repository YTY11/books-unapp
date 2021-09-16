<template>
	<view class="book-msg">
		<view class="book-data">
			<!-- <image class="book-img" src="../../static/img/boots_nav/new_book.png" mode="" /> -->
			<!-- 图片懒加载 -->
			<u-lazy-load class="book-img" :image="bookDetailData.Img" :loading-img="loadingImg" :error-img="errorImg"></u-lazy-load>
			<view class="book-type">
				<text class="book-name">{{bookDetailData.Name}}</text>
				<view class="book-author">
					<image src="../../static/img/tabbar/profile_acitve.png" mode="" />
					<text>{{bookDetailData.Author}} | {{bookDetailData.CName}}</text>
				</view>
				<text class="state">{{bookDetailData.BookStatus}}</text>
				<!-- <text class="state">120万字</text> -->
			</view>
		</view>
		<view class="exceptional">
			<view class="exceptional-item">
				<view class="shang-num">{{bookDetailData.weekHitCount | dataFormatt}}</view>
				<view class="text">周打赏</view>
			</view>
			<view class="line"></view>
			<view class="exceptional-item">
				<view class="hua-num">{{bookDetailData.monthHitCount | dataFormatt}}</view>
				<view class="text">月打赏</view>
			</view>
			<view class="line"></view>
			<view class="exceptional-item">
				<view class="fen-num">{{bookDetailData.hitCount | dataFormatt}}</view>
				<view class="text">总打赏</view>
			</view>
		</view>
		
		<view class="book-text">
			{{bookDetailData.Desc}}
		</view>
		<u-gap height="4" bg-color="#EFEFF0"></u-gap>
	</view>
</template>

<script>
	import errorImg from '../../static/img/lazy/placeholderError.png'
	import loadingImg from '../../static/img/lazy/placeholder.png'
	export default {
		name: 'BookMsg',
			
		props:{
			bookDetailData:{
				type:Object,
				default(){
					return{}
				}
			}
		},
		data() {
			return {
				errorImg:errorImg,
				loadingImg:loadingImg
			}
		},
		filters:{
			//格式化数据
			dataFormatt(data){
				
				data = parseInt(data)
				if(data >= 10000){
					return (data/10000).toFixed(2) + "万"
				}
				else{
					return data
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.book-msg {
		padding: 0 20rpx;

		.book-data {
			display: flex;
			align-items: center;

			.book-img {
				width: 180rpx;
				height: 200rpx;
				border-radius: 10rpx;
				margin: 40rpx 20rpx 40rpx 0;
			}

			.book-type {
				flex: 1;
				height: 190rpx;
				display: flex;
				flex-direction: column;
				align-items: baseline;
				justify-content: space-between;
				padding-right: 20rpx;
				box-sizing: border-box;

				.book-name {
					font-weight: bold;
					font-size: 33rpx;
					margin-bottom: 20rpx;
				}

				.book-author {
					padding: 5rpx 0;
					font-size: 28rpx;
					color: #8C8E8F;

					image {
						width: 30rpx;
						height: 30rpx;
						margin-right: 10rpx;
						margin-bottom: 2rpx;
						vertical-align: bottom;
					}


				}

				.state {
					padding: 5rpx 0;
					font-size: 28rpx;
					color: #8C8E8F;
					border-radius: 10rpx;
					padding: 2rpx;
					box-sizing: border-box;
				}
			}
		}

		.exceptional {
			margin: 0 20rpx 40rpx;
			text-align: center;
			display: flex;
			justify-content: space-around;
			align-items: center;

			.line {
				border-right: 1rpx solid #C2C3C4;
				height: 75rpx;
			}

			.exceptional-item {
				.shang-num {
					color: #FDC792;
					font-size: 33rpx;
				}

				.hua-num {
					color: #FE95A0;
					font-size: 33rpx;
				}

				.fen-num {
					color: #00BBEE;
					font-size: 33rpx;
				}

				.text {
					margin-top: 10rpx;
					font-size: 28rpx;
				}
			}
		}
	
		
	.book-text{
		font-size: 25rpx;
		letter-spacing: 2rpx;
		line-height: 36rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:3;
		margin-bottom: 20rpx;
	}
	}
</style>

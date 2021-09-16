<template>
	<view class="book-section">
		<view class="section-msg" @click="goDirectory">
			<text class="left">目录</text>
			<text class="center">{{bookDetailData.LastChapter}}</text>
			<view class="rigth">
				<text>{{bookDetailData.UpdateTime.substr(0,bookDetailData.UpdateTime.indexOf(" "))}} 更新</text>
				<view class="triangle"></view>
			</view>
		</view>
		<u-gap height="8" bg-color="#EFEFF0"></u-gap>
	</view>
</template>

<script>
	export default{
		name:'BookSection',
		props:{
			bookDetailData:{
				type:Object,
				default(){
					return{}
				}
			}
		},
		methods:{
			//跳转目录页面
			goDirectory(){
				let data = JSON.stringify(this.bookDetailData)
				uni.navigateTo({
					url:`/pages/directory/directory?data=${encodeURIComponent(data)}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.book-section{
		
		.section-msg{
			display: flex;
			align-items: center;
			padding: 20rpx;
			.left{
				font-weight: bold;
				font-size: 33rpx;
			}
			.center{
				width: 360rpx;
				font-size: 26rpx;
				color: #C2C3C4;
				margin-left: 40rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				 white-space: nowrap;
			}
			.rigth{
				display: flex;
				align-items: center;
				justify-content: end;
				flex: 1;
				font-size: 26rpx;
				color: #C2C3C4;
				.triangle{
					width: 20rpx;
					height: 20rpx;
					border-left: 2rpx solid #C2C3C4;
					border-top: 2rpx solid #C2C3C4;
					transform: rotate(135deg);
					
				}
			}
		}
	}
</style>

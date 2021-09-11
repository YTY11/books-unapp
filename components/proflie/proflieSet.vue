<template>
	<view class="set">
		<view class="set-item">
			<view class="set-msg">
				<image src="../../static/img/proflie/read.png" mode=""></image>
				<u-section class="m-section" title="阅读记录" color="#B1B3B3" :font-size="30" :bold="false" :show-line="false" @click="more" sub-title=""></u-section>
			</view>
			<u-gap height="8" bg-color="#EFEFF0"></u-gap>
		</view>
		<view class="set-item">
			<view class="set-msg">
				<image src="../../static/img/proflie/idea.png" mode=""></image>
				<u-section class="m-section" title="意见反馈" color="#B1B3B3" :font-size="30" :bold="false" :show-line="false" @click="more" sub-title=""></u-section>
			</view>
			<u-gap height="8" bg-color="#EFEFF0"></u-gap>
		</view>
		<view class="set-item">
			<view class="set-msg">
				<image src="../../static/img/proflie/share.png" mode=""></image>
				<u-section class="m-section" title="分享" color="#B1B3B3" :font-size="30" :bold="false" :show-line="false" @click="more" sub-title=""></u-section>
			</view>
			<u-gap height="8" bg-color="#EFEFF0"></u-gap>
		</view>
		
	</view>
</template>

<script>
	export default{
		name:"ProflieSet",
		methods:{
			more(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.set{
		width: 700rpx;
		height: 100%;
		margin: 20rpx auto;
		background-color: #FAFCFA;
		border-radius: 10rpx;
		border: 2rpx solid #E8E8E8;
		.set-item{
			height: 120rpx;
			.set-msg{
				display: flex;
				padding: 20rpx;
				image{
					box-sizing: border-box;
					width: 80rpx;
					height: 80rpx;
					background-color: #00B8EE;
					border-radius: 50%;
					padding: 16rpx;
				}
				.m-section {
					font-size: 30rpx;
					flex: 1;
					padding: 20rpx;
					
						font-size: 30rpx !important;
					
				}
			}
		
		}
	}
</style>

<template>
	<view class="paly-game">
		<u-navbar title-color="#000000" :title-bold="true" back-text="返回" title="娱乐中心">
		</u-navbar>
		<view class="content">
			<u-grid :col="3" :border="false">
					<u-grid-item class="border" @click="playGame('益智拼图','http://yty1999.top:9003')">
						<image src="../../static/img/playgame/puzzle.png" class="badge-icon"></image>
						<view class="grid-text">益智拼图</view>
					</u-grid-item>
					
				</u-grid>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			//开始游戏
			playGame(name,path){
				// http://yty1999.top:9003/
				let data = {
					name:name,
					path:path
				}
				data = JSON.stringify(data)
				uni.navigateTo({
					url:`/pages/game/game?data=${encodeURIComponent(data)}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #EFEFEF;
	}
.paly-game{
	.content{
		padding: 40rpx 20rpx;
		.grid-text {
				font-size: 28rpx;
				margin-top: 4rpx;
				color: $u-type-info;
			}
			.badge-icon{
				width: 46rpx;
				height: 46rpx;
			}
			.border{
				border: 4rpx solid #EFEFEF;
				border-radius: 16rpx;
				
			}
	}
	
		
}
</style>

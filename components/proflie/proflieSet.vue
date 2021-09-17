<template>
	<view class="set">
		<view class="set-item">
			<view class="set-msg" @click="readLog">
				<image src="../../static/img/proflie/read.png" mode=""></image>
				<u-section class="m-section" title="阅读记录" color="#B1B3B3" :font-size="30" :bold="false" :show-line="false" sub-title=""></u-section>
			</view>
			<u-gap height="8" bg-color="#EFEFF0"></u-gap>
		</view>
		<view class="set-item">
			<view class="set-msg" @click="playGame">
				<image src="../../static/img/proflie/play_game.png" mode=""></image>
				<u-section class="m-section" title="娱乐中心" color="#B1B3B3" :font-size="30" :bold="false" :show-line="false" sub-title=""></u-section>
			</view>
			<u-gap height="8" bg-color="#EFEFF0"></u-gap>
		</view>
		<!-- 功能待开发 -->
		<!-- <view class="set-item">
			<view class="set-msg" @click="idea">
				<image src="../../static/img/proflie/idea.png" mode=""></image>
				<u-section class="m-section" title="意见反馈" color="#B1B3B3" :font-size="30" :bold="false" :show-line="false"  sub-title=""></u-section>
			</view>
			<u-gap height="8" bg-color="#EFEFF0"></u-gap>
		</view> -->
		<view class="set-item">
			<view class="set-msg" @click="share">
				<image src="../../static/img/proflie/share.png" mode=""></image>
				<u-section class="m-section" title="软件分享" color="#B1B3B3" :font-size="30" :bold="false" :show-line="false"  sub-title=""></u-section>
			</view>
			<u-gap height="8" bg-color="#EFEFF0"></u-gap>
		</view>
		<!-- 功能待开发 -->
		<!-- <view class="set-item">
			<view class="set-msg"  @click="give">
				<image src="../../static/img/proflie/give.png" mode=""></image>
				<u-section class="m-section" title="打赏作者" color="#B1B3B3" :font-size="30" :bold="false" :show-line="false"  sub-title=""></u-section>
			</view>
			<u-gap height="8" bg-color="#EFEFF0"></u-gap>
		</view> -->
		<view class="set-item">
			<view class="set-msg"  @click="devHelp">
				<image src="../../static/img/proflie/dev_help.png" mode=""></image>
				<u-section class="m-section" title="开发帮助" color="#B1B3B3" :font-size="30" :bold="false" :show-line="false"  sub-title=""></u-section>
			</view>
			<u-gap height="8" bg-color="#EFEFF0"></u-gap>
		</view>
		<view class="set-item">
			<view class="set-msg"  @click="exit">
				<image src="../../static/img/proflie/exit.png" mode=""></image>
				<u-section class="m-section" title="退出登录" color="#B1B3B3" :font-size="30" :bold="false" :show-line="false"  sub-title=""></u-section>
			</view>
			<u-gap height="8" bg-color="#EFEFF0"></u-gap>
		</view>
		
		
		
	</view>
</template>

<script>
	export default{
		
		name:"ProflieSet",
		methods:{
			//显示历史记录
			readLog(){
				uni.navigateTo({
					url:'/pages/proflie/readHistory'
				})
			},
		
			// 意见反馈
			idea(){
				uni.showToast({
					title:'功能开发中...',
					duration:1500,
					icon:'none'
				})
			},
			//软件分享
			share(){
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",//分享到聊天
				    type: 0,//图文
				    href: "https://baidu.com/",//链接
				    title: "阅读软件分享",//标题
				    summary: "温泉里的鱼出品",//描述
				    imageUrl: "../../static/img/boots_nav/over_book.png",//图片
				    success: function (res) {//成功回调
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {//失败回调
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
			},
			
			//娱乐
			playGame(){
				
				uni.navigateTo({
					url:'/pages/proflie/playGame'
				})
			},
			//打赏
			give(){
				uni.showToast({
					title:'功能开发中...',
					duration:1500,
					icon:'none'
				})
			},
			//开发帮助
			devHelp(){
				
				uni.navigateTo({
					url:'/pages/proflie/devHelp'
				})
			},
			//退出登录
			exit(){
				//如何没有登录点击退出无反应
				this.userData = uni.getStorageSync('USER_DATA')
				if(typeof this.userData != 'object' || this.userData.userImg == undefined){
					this.userData = {}
					uni.showToast({
						title:'请先登录',
						duration:1500,
						icon:'none'
					})
					return
				}			
				this.$emit('exit')
			},
			
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

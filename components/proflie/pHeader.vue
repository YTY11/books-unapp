<template>
	<view class="header">
		<view class="user-msg" v-if="!isLogin">
			<image src="../../static/img/boots_nav/ranked.png" mode=""></image>
			<view class="user-name">活着</view>
		</view>
		<button class="user-msg" v-else type="warn" @click="login">一键登录</button>
		
		
	</view>
</template>

<script>
	export default{
		name:'PHeader',
		data(){
			return{
				isLogin:true
			}
		},
		methods:{
			//登录
			login(){
				this.isLogin = false
			},
		}
	}
</script>

<style lang="scss" scoped>
	.header{
		background: url(../../static/img/proflie/proflie_bg.jpg) no-repeat;
		background-size: cover;
		width: 100%;
		height: 400rpx;
		position: relative;
		.user-msg{
			text-align: center;
			color: #F4F4F4;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			image{
				width: 140rpx;
				height: 140rpx;
				border-radius: 50%;
			}
			.user-name{
				font-size: 30rpx;
				font-weight: 400;
				letter-spacing: 2rpx;
			}
			
		}
	
	
	}
	
</style>

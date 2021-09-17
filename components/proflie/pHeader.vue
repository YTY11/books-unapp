<template>
	<view class="header">
		
		<view class="user-msg" v-if="userData.userImg!==undefined">
			<image fade-show :src="userData.userImg" mode="" @click="enlarge(userData.userImg)"></image>
			<view class="user-name">{{userData.userName}}</view>
		</view>
		<button class="user-msg" v-else type="warn" @click="login">一键登录</button>
		

	</view>
</template>

<script>
	export default {
		name: 'PHeader',
		props:{
			userData:{
				type:Object,
				default(){
					return{}
				}
			}
		},
		data(){
			return{
				have:true
			}
		},
		methods: {
			//登录
			login() {	
				if(this.have){
					this.have = false
					let _that = this
					
					uni.login({
						provider: 'weixin',
						success: function(loginRes) {
							uni.showLoading({
								title:'登录中...'
							})
							// 获取用户信息
							uni.getUserInfo({
								provider: 'weixin',
								success: function(infoRes) {
									let userData= {
										userImg:infoRes.userInfo.avatarUrl,
										userName:infoRes.userInfo.nickName,
									}
									uni.setStorageSync('USER_DATA',userData)
									_that.$emit('updata')
									uni.hideLoading()
									_that.have = true
								}
							});
						}
					});
				}
				
			},
			//全屏查看图片
			enlarge(img){  
			            let arr=[]  
			            arr.push(img)  
			            uni.previewImage({  
			                urls: arr,  
			                current: 0,  
			            });  
			        }  
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		background: url(../../static/img/proflie/proflie_bg.jpg) no-repeat;
		background-size: cover;
		width: 100%;
		height: 400rpx;
		position: relative;

		.user-msg {
			text-align: center;
			color: #F4F4F4;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			image {
				width: 140rpx;
				height: 140rpx;
				border-radius: 50%;
			}

			.user-name {
				font-size: 30rpx;
				font-weight: 400;
				letter-spacing: 2rpx;
			}

		}


	}
</style>

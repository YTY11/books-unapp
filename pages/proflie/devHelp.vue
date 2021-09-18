<template>
	<view class="dev-help">
		<u-navbar title-color="#000000" :title-bold="true" back-text="返回" title="开发帮助">
		</u-navbar>
		<view class="content">
			<view class="">开发技术:</view>
			<view class="left">
				<text>uniapp: </text>
			<u-link class="" href="https://uniapp.dcloud.io">https://uniapp.dcloud.io</u-link>
			<u-gap height="2" bg-color="#EFEFF0"></u-gap>
			</view>
			
			
			<view class="left">
				<text>uView 组件:</text>
			<u-link class="" href=" https://www.uviewui.com"> https://www.uviewui.com</u-link>
			<u-gap height="2" bg-color="#EFEFF0"></u-gap>
			</view>
			
			<view class="left">
				<text>z-paging 组件:</text>
			<u-link class="" href="https://z-paging.com/">https://z-paging.com/</u-link>
			<u-gap height="2" bg-color="#EFEFF0"></u-gap>
			</view>
			
			<view class="left">
				<text>阅读翻页功能参考:</text>
			<u-link class="" href=" https://ext.dcloud.net.cn/plugin?id=2485">作者: zhengmengtian 的插件</u-link>
			<u-gap height="2" bg-color="#EFEFF0"></u-gap>
			</view>
			
			<view class="left">
				<text>书籍API使用:</text>
			<u-link class="" href="https://blog.csdn.net/weixin_46291378/article/details/112320747">weixin_46291378的博客</u-link>
			<u-gap height="2" bg-color="#EFEFF0"></u-gap>
			</view>
			
			<view class="left">
				<text>UI参考:</text>
			<u-link class="" href="https://www.zcool.com.cn/work/ZMzA0NTQ3MTI=.html">zcool站酷 作者: CI_Chain | UI设计师</u-link>
			<u-gap height="2" bg-color="#EFEFF0"></u-gap>
			</view>
			
			
			<!-- https://gitee.com/yty1998/books-unapp -->
			<view class="left">
				<text>项目源码:</text><br/>
			<u-link class="" href="https://github.com/YTY11/books-unapp">1. github: books-unapp</u-link><br/>
			<u-link class="" href="https://gitee.com/yty1998/books-unapp">2. gitee: books-unapp</u-link>
			
			<u-gap height="2" bg-color="#EFEFF0"></u-gap>
			</view>
			
			<view class="bottom">
				<u-form-item >如有侵权请联系开发者:</u-form-item>
				<u-form-item label-align="right" @click.native="copy('13523171602')" label="微信:" >13523171602</u-form-item>
				<u-form-item label-align="right" @click.native="copy('862454711')" label="QQ:">862454711</u-form-item>
			</view>
			
			<view class="session">
				<image src="../../static/icon.png" mode=""></image>
				<view>版本号：0.0.1 测试版</view>
			</view>
			
			
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
				
			}
		},
		methods:{
			copy(data){
				uni.setClipboardData({
				    data: data,
				    success: function () {
				        console.log('success');
				    }
				});
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.dev-help{
		
		.content{
			
			font-size: 35rpx;
			padding: 20rpx 40rpx;
			.left{
				padding: 10rpx 20rpx;
				u-gap{
					margin: 10rpx 0;
				}
			}
			.bottom{
				margin-top: 100rpx;
				font-size: 25rpx;
				font-weight: bold;
				text-align: center;
				
			}
			.session{
				color: #909399;
				font-size: 20rpx;
				text-align: center;
				image{
					width: 100rpx;
					height: 100rpx;
				}
			}
		}
	}
</style>

<template>
	<view class="profile">
		<!-- 头部 -->
		<PHeader :userData="userData" @updata="updata"/>
		

		<!-- 设置 -->
		<ProflieSet @exit="exit"/>
		<u-modal style="z-index: 999;" v-model="show" show-cancel-button @cancel="!show" @confirm="confirm" :content="content"></u-modal>
		
	</view>
</template>

<script>
	//头部组件
	import PHeader from '../../components/proflie/pHeader.vue'
	
	// 设置
	import ProflieSet from '../../components/proflie/proflieSet.vue'
	export default {
		components: {
			PHeader,
			ProflieSet
		},
		data() {
			return {
				userData:{},
				show:false,
				content:'确认退出该账号吗?'
			};
		},
		
		onLoad() {
			this.userData = uni.getStorageSync('USER_DATA')
			if(typeof this.userData != 'object'){
				this.userData = {}
			}
		},
		
		methods: {
			//退出登录
			exit(){
				this.show = true
			},
			//确认退出
			confirm(){
				this.show = false
				uni.setStorageSync('USER_DATA',{})
				uni.showToast({
					title:"已退出",
					duration:1500
				})
				this.userData = {}
			},
			//更新数据
			updata(){				
				this.userData = uni.getStorageSync('USER_DATA')
				uni.showToast({
					title:"登录成功",
					duration:1500
				})
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	.profile {
		
	}

	page {
		background-color: #EFEFEF !important;
	}
</style>

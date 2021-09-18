<template>
	<view class="read-history">
		<u-navbar title-color="#000000" :title-bold="true" back-text="返回" title="历史记录">
			<view class="right" slot="right" @click="isShow">清除</view>
		</u-navbar>
		<u-time-line>
			<u-time-line-item v-for="(item,index) in readHistory" :key="index">
				<!-- 此处没有自定义左边的内容，会默认显示一个点 -->
				<template v-slot:content >
					<view >
						<view class="u-order-desc">{{item.Name}}</view>
						<view class="u-order-time">{{item.Time}}</view>
					</view>
				</template>
			</u-time-line-item>
		</u-time-line>
		<u-modal v-model="show" :show-cancel-button="true" @cancel="!show" :content="content" @confirm="confirm"></u-modal>
		<u-empty margin-top="300"  :show="readHistory.length < 1" text="没有历史记录" mode="history"></u-empty>
	</view>
	
</template>

<script>
	export default {
		name: 'ReadHistory',
		data(){
			return{
				show:false,
				content:'确定清除历史记录吗?',
				readHistory:[]
			}
		},
		onLoad() {
			let bookCaseData = uni.getStorageSync('READ_HISTORY_LOG')
			
			if (typeof bookCaseData !== 'object') {
				bookCaseData = []
			}
			this.readHistory = bookCaseData
		},
		methods:{
			isShow(){
				if(this.readHistory.length > 0){
				 this.show = true
				}
			},
			//确认清除历史记录
			confirm(){
				uni.setStorageSync('READ_HISTORY_LOG', []);
				let bookCaseData = uni.getStorageSync('READ_HISTORY_LOG')
				
				if (typeof bookCaseData !== 'object') {
					bookCaseData = []
				}
				this.readHistory = bookCaseData
				uni.showToast({
					title:'清除成功',
					duration:1500
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.read-history{
		padding: 40rpx;
		
		.right{
			padding-right: 40rpx;
			font-weight: bold;
			font-size: 30rpx;
		}
		.u-order-desc {
			color: rgb(150, 150, 150);
			font-size: 28rpx;
			margin-bottom: 6rpx;
		}
		
		.u-order-time {
			color: rgb(200, 200, 200);
			font-size: 26rpx;
		}
	}
	
</style>

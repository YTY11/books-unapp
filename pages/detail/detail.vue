<template>
	<view class="">
		<u-navbar title-color="#000000" :title-bold="true" back-text="返回" title="书籍详情">
		</u-navbar>
	
	<z-paging :empty-view-fixed="false" auto-hide-loading-after-first-loaded
		loading-more-no-more-text="~~~~~~~~我是有底线的~~~~~~~~" auto-show-back-to-top back-to-top-bottom="160rpx"
		back-to-top-img="../../static/img/top/top.png" class="z-paging" ref="paging" v-model="dataList"
		:refresher-enabled="false"
		
		@query="queryList" :hide-empty-view="true">
		<!-- 书籍信息 -->
		<BookMsg :bookDetailData="bookDetailData"/>

		<!-- 目录 -->
		<BookSection :bookDetailData="bookDetailData"/>

		<!-- 读本书的人也喜欢 -->
		<view class="like-books">
			<view class="like-title">读本书的人也喜欢</view>

			<view class="like-books-data">

				<ToYouBooksItem v-for="(item,index) in dataList" :item="item" :key="index" />
			</view>
		</view>
	
		<view class="bottom" slot="bottom">
			<view class="downloads"><image src="../../static/img/download.png" mode=""></image>下载</view>
			<view class="line"></view>
			<view class="add-book" :class="{'isAdd':addText=='已添加'}" @click="addBookCase"> <image src="../../static/img/add.png" mode=""></image>{{addText}}</view>
			<u-button @click="reading" class="read"   :ripple="true" ripple-bg-color="#6CCFEC" type="primary"><image src="../../static/img/read.png" mode=""></image>开始阅读</u-button>
		</view>
	</z-paging>
	</view>
</template>

<script>
	//书籍信息
	import BookMsg from '../../components/detail/bookMsg.vue'
	//目录
	import BookSection from '../../components/detail/bookSection.vue'
	//读本书的人也喜欢
	import ToYouBooksItem from '../../components/books/toYouBooksItem.vue'
	
	//网络数据
	import {seekBooks} from '../../api/seek.js'
	export default {
		name: 'detail',
		components: {
			BookMsg,
			BookSection,
			ToYouBooksItem
		},
		data() {
			return {
				dataList: [],
				bookDetailData:{},
				page:1,
				addText:"加入书架"
			}
		},
		onLoad(option) {
			this.page =  this.$bookUtils.getRandom(1,30)
			this.bookDetailData = JSON.parse(decodeURIComponent(option.data))
			
			let bookCaseData = uni.getStorageSync('BOOK_CASE_DATA')
			if (typeof bookCaseData !== 'object') {
				bookCaseData = []
			}
			let num = bookCaseData.find(item=> item.Id == this.bookDetailData.Id);
			if(num !== undefined){
				this.addText = '已添加' 
			}
			
			
		},
		onShow() {
			let bookCaseData = uni.getStorageSync('BOOK_CASE_DATA')
			if (typeof bookCaseData !== 'object') {
				bookCaseData = []
			}
			let num = bookCaseData.find(item=> item.Id == this.bookDetailData.Id);
			if(num !== undefined){
				this.addText = '已添加' 
			}
		},
		methods: {
		async	queryList() {
				let data = []
				uni.showLoading({
					title: '加载中...'
				})
			await	this.seekBooks(`''`,this.page++)
			uni.hideLoading();
			},
		
			//开始阅读
			reading(){
				let data = JSON.stringify(this.bookDetailData)
				uni.navigateTo({
					url:`/pages/read/read?data=${encodeURIComponent(data)}`
				})
			},
			// 读本书的人也喜欢数据
		async	seekBooks(page,name){
			await	seekBooks(page,name).then(res=>{
					
					if(res.info === "success"){
						this.$refs.paging.complete(res.data);
					}
				}).catch(err=>{
					console.log(err);
					uni.hideLoading();
					uni.showModal({
						title: '连接失败',
						content: '请检查您的网络状态',
						confirmText: '重试',
						success: async (res) => {
							if (res.confirm) {
								//用户点击了重试
								uni.showLoading({
									title: '加载中...'
								})
								await this.seekBooks(page,name)
								uni.hideLoading();
								resolve()
							} else if (res.cancel) {
								//用户点击取消
								this.back()
							}
						}
					})
				})
			},
		
			//加入书架
			addBookCase(){
				
				let bookCaseData = uni.getStorageSync('BOOK_CASE_DATA')
				
				if (typeof bookCaseData !== 'object') {
					bookCaseData = []
				}
				let num = bookCaseData.find(item=> item.Id == this.bookDetailData.Id);
				if(num !== undefined){
					return 
				} 
				bookCaseData.push({
					Name:this.bookDetailData.Name,
					Img:this.bookDetailData.Img,
					Id:this.bookDetailData.Id,
					delete:false
				})
				
				uni.setStorageSync('BOOK_CASE_DATA', bookCaseData)
				uni.showToast({
				    title: '加入成功',
				    duration: 2000
				});
				this.addText = "已添加"
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	.z-paging {
		margin-top: calc(100rpx + var(--status-bar-height)) ;
		.like-books {
			.like-title {
				width: 100%;
				font-weight: bold;
				font-size: 33rpx;
				padding: 40rpx 20rpx;
			}

			.like-books-data {
				display: flex;
				flex-wrap: wrap;
				margin: 0 26rpx;
			}
		}
		.bottom{
			height: 100rpx;
			width: 100%;
			background-color: #FFFFFF;
			align-items: center;
			display: flex;
			.line{
				border-left:2rpx solid #A4A4A4 ;
				text-align: center;
				height: 60%;
				line-height: 100rpx;
				
			}
			.downloads{
				flex:1;
				text-align: center;
				background-color: #FFFFFF;
				height: 100%;
				line-height: 100rpx;
				image{
					width: 60rpx;
					height: 60rpx;
					vertical-align: middle;
					margin-right: 20rpx;
				}
			}
			.add-book{
				flex:1;
				text-align: center;
				height: 100%;
				line-height: 100rpx;
				image{
					width: 40rpx;
					height: 40rpx;
					vertical-align: middle;
					margin-right: 20rpx;
				}
				
			}
			.isAdd{
				color: #8F8F94;
			}
			.read{
				flex:1;
				background-color: #00B9EF;
				height: 100%;
				image{
					width: 60rpx;
					height: 60rpx;
					vertical-align: middle;
					margin-right: 20rpx;
				}
				
			}
		}
	}
</style>

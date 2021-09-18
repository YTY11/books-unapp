<template>
	<z-paging :empty-view-fixed="false" auto-hide-loading-after-first-loaded loading-more-no-more-text="~~~~~~~~我是有底线的~~~~~~~~"
		auto-show-back-to-top back-to-top-bottom="160rpx" back-to-top-img="../../static/img/top/top.png"
		class="z-paging" ref="paging" v-model="dataList" @query="queryList" :hide-empty-view="true"
		@refresherStatusChange="refresherStatusChange"
		>
		<!-- 自定义下拉刷新样式 -->
		<custom-refresher slot="refresher" slot-scope="{refresherStatus}" :status="refresherStatus" />
		<!-- 头部搜索 -->
		<Seek slot="top"/>
		
		<!-- 轮播图 -->
		<view class="wrap">
			<u-swiper indicator-color="#5EDAFE" img-mode="scaleToFill" indicator-active-color="#5EDAFE" :list="swiperList" interval="3000" 
			@click="clickSwiperImg" bg-color="#FFFFFF" :circular="true" :effect3d="true" 
			border-radius="15"></u-swiper>
		</view>
		
		<!-- 导航 -->
		<!-- <Nav/> -->
		
		<!-- 滚动推荐 -->
		<Notice :noticeData="noticeData"/>
		
		<!-- 主编力荐 -->
		<Editorial :editorialData="editorialData"/>
		
		<!-- 今日热门 -->
		<Popular :popularData="popularData"/>
		
		<!-- 为你推荐 -->
		<ToYouBooks :dataList='dataList'/>
	</z-paging>
</template>

<script>
	//头部搜索
	import Seek from "../../components/books/seek.vue"
	//下拉刷新
	import CustomRefresher from '../../components/custom-refresher/custom-refresher.vue'
	//导航
	import Nav from '../../components/books/nav.vue'
	//滚动推荐
	import Notice from '../../components/books/notice.vue'
	 // 主编力荐
	 import Editorial from '../../components/books/editorial.vue'
	 // 今日热门
	 import Popular from '../../components/books/popular.vue'
	 // 为你推荐
	 import ToYouBooks from '../../components/books/toYouBooks.vue'
	 
	 //网络数据
	 import {seekBooks} from '../../api/seek.js'
	export default {
		components: {
			Seek,
			CustomRefresher,
			Nav,
			Notice,
			Editorial,
			Popular,
			ToYouBooks
		},
		data() {
			return {
				dataList: [],
				swiperList: [],
				editorialData:[],
				popularData:[],
				noticeData:[],
				page:1,
				isLoading:false
				
			}
		},
		onLoad() {
			this.page =  this.$bookUtils.getRandom(1,30)
			this.editorialAndpopularDatas(`''`,this.page)
		},
		onHide() {
			this.$store.commit('SET_SHOW',false)
		},
		methods: {
			async queryList() {
				let data = []
				uni.showLoading({
					title: '加载中...'
				})
			
			await	this.forYouDatas(`''`,this.page++)				
				uni.hideLoading()
			},
			// 下拉刷新
		async	refresherStatusChange(index){
				if(index == 2){//刷新中
				uni.showLoading({
					title: '加载中...'
				})
				await	this.editorialAndpopularDatas(`''`,this.$bookUtils.getRandom(1,30))
				uni.hideLoading()
				}
				
			},
			
			//轮播图 主编推荐 今日热门
		async	editorialAndpopularDatas(name,page){
			await	seekBooks(name,page).then(res=>{					
					if(res.info === "success"){
						this.editorialData = res.data.slice(0,5)//推荐数据
						this.popularData = [res.data.slice(5,7),res.data.slice(7,9),res.data.slice(9,11)]//热门数据
						this.swiperList = []
						
						res.data.slice(11,14).forEach(item=>{
							this.swiperList.push({image:item.Img,title:item.Name,item})
						})
						this.noticeData = res.data.slice(14,20)
						
						
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
								await this.editorialAndpopularDatas(name,page)
								uni.hideLoading()
								resolve()
							} else if (res.cancel) {
								//用户点击取消
								this.back()
							}
						}
					})
				})
			},
			//为你推荐
		async	forYouDatas(name,page){
			await	seekBooks(name,page).then(res=>{					
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
								await this.forYouDatas(name,page)
								uni.hideLoading()
								resolve()
							} else if (res.cancel) {
								//用户点击取消
								this.back()
							}
						}
					})
				})
			},
			
			// 点击轮播图片
			clickSwiperImg(index){
				//去书籍详情页
				let data = JSON.stringify(this.swiperList[index].item)
				uni.navigateTo({
					url: `/pages/detail/detail?data=${encodeURIComponent(data)}`
				})
			}
		
		
		}
	}
</script>

<style lang="scss" scoped>
	.z-paging {
		bottom: 12rpx;
		padding-top: var(--status-bar-height);
		.wrap {
			padding: 20rpx 12rpx;
			.u-indicator-item-round-active{background-color:#5EDAFE !important}		
		}
	}
	
</style>

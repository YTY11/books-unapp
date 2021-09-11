<template>
	<z-paging :empty-view-fixed="false" auto-hide-loading-after-first-loaded loading-more-no-more-text="~~~~~~~~我是有底线的~~~~~~~~"
		auto-show-back-to-top back-to-top-bottom="160rpx" back-to-top-img="../../static/img/top/top.png"
		class="z-paging" ref="paging" v-model="dataList" @query="queryList" :hide-empty-view="true">
		<!-- 自定义下拉刷新样式 -->
		<custom-refresher slot="refresher" slot-scope="{refresherStatus}" :status="refresherStatus" />
		<!-- 头部搜索 -->
		<Seek slot="top"/>
		
		<!-- 轮播图 -->
		<view class="wrap">
			<u-swiper indicator-color="#5EDAFE" indicator-active-color="#5EDAFE" :list="swiperList" interval="3000" duration="1500" bg-color="#FFFFFF" :circular="true" :effect3d="true" border-radius="15"></u-swiper>
		</view>
		
		<!-- 导航 -->
		<Nav/>
		
		<!-- 滚动推荐 -->
		<Notice/>
		
		<!-- 主编力荐 -->
		<Editorial/>
		
		<!-- 今日热门 -->
		<Popular/>
		
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
				swiperList: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				
				
			}
		},
		onHide() {
			this.$store.commit('SET_SHOW',false)
		},
		methods: {
			queryList() {
				let data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
				uni.showLoading({
					title: '加载中...'
				})
				setTimeout(()=>{
					uni.hideLoading();
					this.$refs.paging.complete(data);
				},3000)
				
			},
			
			
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

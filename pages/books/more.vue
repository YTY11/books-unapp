<template>
	<z-paging :empty-view-fixed="false" auto-hide-loading-after-first-loaded
		loading-more-no-more-text="~~~~~~~~我是有底线的~~~~~~~~" auto-show-back-to-top back-to-top-bottom="160rpx"
		back-to-top-img="../../static/img/top/top.png" class="z-paging" ref="paging" v-model="dataList"
		@query="queryList" :hide-empty-view="true">
		<u-navbar slot="top" title-color="#000000" :title-bold="true" back-text="返回" :title="title">
		</u-navbar>
		<!-- 自定义下拉刷新样式 -->
		<custom-refresher slot="refresher" slot-scope="{refresherStatus}" :status="refresherStatus" />

		<view class="">
			<EdAndPopItem v-for="(item,index) in dataList" :key="index" :item="item" />
		</view>
	</z-paging>
</template>

<script>
	import EdAndPopItem from '../../components/books/edAndPopItem.vue'

	//网络数据
	import {
		seekBooks
	} from '../../api/seek.js'
	export default {
		components: {
			EdAndPopItem
		},
		data() {
			return {
				dataList: [],
				page: 1,
				title: ''
			}
		},
		onLoad(oprion) {
			this.title = oprion.title
			this.page = this.$bookUtils.getRandom(1, 30)

		},
		methods: {
			async queryList() {
				let data = []
				uni.showLoading({
					title: '加载中...'
				})
				await this.forYouDatas(`''`, this.page++)
				this.$nextTick(function(){
					uni.hideLoading()
				})
			},
			async forYouDatas(name, page) {
				await seekBooks(name, page).then(res => {
					if (res.info === "success") {
						this.$refs.paging.complete(res.data);
					}
				}).catch(err => {
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
								await this.forYouDatas(name, page)
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
		}
	}
</script>

<style lang="scss" scoped>

</style>

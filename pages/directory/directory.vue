<template>
	<view class="directory">
		<u-navbar title-color="#000000" :title-bold="true" back-text="返回" title="目录"></u-navbar>
		<view class="content">
			<Directory :directoryData="directoryData" :lists="lists" />
		</view>
	</view>
</template>

<script>
	//目录
	import Directory from '../../components/directory/directory.vue'

	//网络数据
	import {
		getBookDirectoryData
	} from '../../api/book.js'
	export default {
		components: {
			Directory
		},
		data() {
			return {
				directoryData: {},
				lists: []
			}
		},
		async onLoad(option) {
			this.directoryData = JSON.parse(decodeURIComponent(option.data))
			uni.showLoading({
				title: '加载中',
				mask: true
			})
			await this.getBookDirectoryData(this.directoryData.Id)
			this.$nextTick(function(){
				uni.hideLoading()
			})
		},
		
		methods: {
			async getBookDirectoryData(bookId) {

				await getBookDirectoryData(bookId).then(res => {
					//格式化json字符串
					res = res.replace(/\}\,\]/g, '\}\]')
					res = JSON.parse(res)
					if (res.info === "success") {
						this.lists = res.data.list;
					}
					
				}).catch(err => {

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
								await this.getBookDirectoryData(bookId)
								uni.hideLoading()
								resolve()
							} else if (res.cancel) {
								//用户点击取消
								this.back()
							}
						}
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.directory {}
</style>

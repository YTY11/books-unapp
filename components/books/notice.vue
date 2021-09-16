<template>
	<view class="notice">
		<u-gap height="3" bg-color="#EFEFF0"></u-gap>
		<view class="notice-area">
			<text class="notice-text">推荐</text>
			<text>|</text>
			<u-notice-bar :duration="3000" class="notice-conent" :volume-icon="false" bg-color="#fff" color="#A4A5A6"
				type="primary" mode="vertical" :list="item" @click="clickItem"></u-notice-bar>
		</view>
		<u-gap height="8" bg-color="#EFEFF0"></u-gap>
	</view>
</template>

<script>
	export default {
		name: 'Notice',
		props: {
			noticeData: {
				type: Array,
				default () {
					return []
				}
			}
		},
		watch: {
			noticeData() {
				this.item = []
				this.noticeData.forEach(item => {
					this.item.push(item.Name)
				})

			}
		},
		data() {
			return {
				item: []
			}
		},
		methods: {
			//点击推荐项
			clickItem(index) {
				//去书籍详情页
				let data = JSON.stringify(this.noticeData[index])
				uni.navigateTo({
					url: `/pages/detail/detail?data=${data}`
				})
			}
		}
	
	}
</script>

<style lang="scss" scoped>
	.notice {
		.notice-area {
			padding-left: 30rpx;
			display: flex;
			align-items: center;

			.notice-text {
				width: 70rpx;
				color: #259CE9;
				font-style: italic;
				font-weight: bold;
				text-shadow: #93e7f5 4rpx 2rpx 4rpx;
			}

			&:nth-child(2) {
				color: #D4D5D5;
			}

			.notice-conent {
				flex: 1;
			}
		}
	}
</style>

<template>
	<view class="status_bar">
		<u-search placeholder="搜索书名 · 作者" @search="search" input-align="center" margin="12rpx 0" :show-action="false"
			v-model="keyword" clearabled>
		</u-search>

		<u-popup :closeable="true" @close="close" v-model="$store.state.books.show" mode="bottom" width="100%" height="600px" border-radius="14">
			<view class="content">
				<scroll-view scroll-y="true">
					<view>
						<view v-for="index in 20" :key="index">
							第{{index}}个Item
						</view>
					</view>
				</scroll-view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		name: "Seek",
		data() {
			return {
				keyword: '',
			}
		},
		methods: {
			//搜索
			search() {				
				this.$store.commit('SET_SHOW', true)
			},
			//关闭
			close(){
				this.$store.commit('SET_SHOW', false)
				this.keyword = ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	.status_bar {
		padding: 0 12rpx;
		.content {
			padding: 24rpx;
			text-align: center;
		}
	}
</style>

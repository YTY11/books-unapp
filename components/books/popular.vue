<template>
	<view class="popular">
		<u-section class="m-section" title="今日热门" :show-line="false" @click="more"></u-section>
		<view class="popular-data">
			<view>
				<u-tabs-swiper height="0" ref="uTabs" :list="[1,2,3,4,5,6]" :current="current" @change="tabsChange"
					:is-scroll="false" swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper class="swiper-item" :current="swiperCurrent" @transition="transition"
				@animationfinish="animationfinish">
				<swiper-item v-for="(popular, index) in popularData" :key="index">
					<scroll-view scroll-y style="height: 420rpx;width: 100%;" @scrolltolower="onreachBottom">
						<EdAndPopItem v-for="(item,index) in popular" :item="item" :key="item.Id" />
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	//子组件
	import EdAndPopItem from './edAndPopItem.vue'
	export default {
		name: 'Popular',
		components: {
			EdAndPopItem
		},
			
		props:{
			popularData:{
				type:Array,
				default(){
					return[]
				}
			}
		},
		data() {
			return {
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
			}
		},
		methods: {
			// 点击更多
			more() {
				console.log("popular");
			},
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			// scroll-view到底部加载更多
			onreachBottom() {

			}
		}
	}
</script>

<style lang="scss" scoped>
	.popular {
		.m-section {
			padding: 20rpx;
		}

		.popular-data {
			height: 420rpx;
			.swiper-item {
				height: 420rpx;

			}

		}
	}
</style>

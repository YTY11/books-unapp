<template>
	<view class="boot-item">
		<image src="../../static/img/boots_nav/new_book.png" mode="" />
		<text>活着</text>
	</view>
</template>

<script>
	export default {
		name: 'BootItem'
	}
</script>

<style lang="scss" scoped>
	.boot-item {
		text-align: center;
		display: flex;
		flex-direction: column;
		width: 150rpx;
		margin: 12rpx;

		image {
			width: 150rpx;
			height: 170rpx;
			margin-bottom: 10rpx;
		}
	}
</style>

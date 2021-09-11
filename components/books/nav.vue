<template>
	<view class="nav">
		<view class="nav-item" @click="category">
			<image class="img-size" src="../../static/img/boots_nav/category.png" mode=""></image>
			<text class="category">分类</text>
		</view>
		<view class="nav-item" @click="newBook">
			<image class="img-size" src="../../static/img/boots_nav/new_book.png" mode=""></image>
			<text class="new-book">新书</text>
		</view>
		<view class="nav-item" @click="overBook">
			<image class="img-size" src="../../static/img/boots_nav/over_book.png" mode=""></image>
			<text class="over-book">完本</text>
		</view>
		<view class="nav-item" @click="ranked">
			<image class="img-size" src="../../static/img/boots_nav/ranked.png" mode=""></image>
			<text class="ranked">排行</text>
		</view>
		<view class="nav-item" @click="free">
			<image class="img-size" src="../../static/img/boots_nav/free.png" mode=""></image>
			<text class="free">免费</text>
		</view>
	</view>
</template>

<script>
	export default{
		name:"Nav",
		methods:{
			//点击分类
			category(){
				console.log("category");
			},
			//点击新书
			newBook(){
				console.log("newBook");
			},
			//点击完本
			overBook(){
				console.log("overBook");
			},
			//点击排行
			ranked(){
				console.log("ranked");
			},
			//点击免费
			free(){
				console.log("free");
			},
		}
	}
</script>

<style lang="scss" scoped>
	.nav{
		width: 100%;
		display: flex;
		justify-content: space-around;
		text-align: center;
		margin-bottom: 20rpx;
		.nav-item{
			width: 80rpx;
			.img-size{
				width: 80rpx;
				height: 80rpx;
			}
			.category{
				color: #99A3E8;
			}
			.new-book{
				color:#E191B6;
			}
			.over-book{
				color: #7FBD77;
			}
			.ranked{
				color: #ECAE7C;
			}
			.free{
				color: #74CCED;
			}
		}
		
	}
</style>

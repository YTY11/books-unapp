<template>
	<view class="data-list">
		<view class="data"  v-for="(item,index) in dataList" 
			@longtap="longtap">
			<view @click="selectDelete(index)" class="is-delete" :class="{'select-delete':item.delete}" v-show="isDelete">
				<image src="../../static/img/select/select.png"  v-if="!item.delete" />
				<image src="../../static/img/select/select_active.png" v-else/>
			</view>
			
			<view class="item" @click="goDetail(index)">
				
				<image  class="book-img" :src="item.Img" ></image>
			</view>
			<view class="book-name">{{item.Name}}</view>
			
		</view>
		<view class="data" v-show="!newIsDelete" @click="addBooks">
			<view class="add-books">
				<image src="../../static/img/add_books.png" mode=""></image>
			</view>
			<text>添加</text>
		</view>
	</view>
</template>

<script>
	import errorImg from '../../static/img/lazy/placeholderError.png'
	import loadingImg from '../../static/img/lazy/placeholder.png'
	export default{
		name:'BooksDataItem',
		props:{
			dataList:{
				type:Array,
				default(){
					return[]
				}
			},
			isDelete:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return{
				newIsDelete:false,
				errorImg:errorImg,
				loadingImg:loadingImg,
			}
		},
		watch:{
			isDelete(){
				this.newIsDelete = this.isDelete
			}
		},
		methods:{
			//长按事件
			longtap(){
				this.newIsDelete = true
				this.$bus.$emit("isLongTap",this.newIsDelete)
			},
			//选中事件
			selectDelete(index){
				this.dataList[index].delete = !this.dataList[index].delete
			},
			//添加书籍
			addBooks(){
				this.$bus.$emit('goBooks')
				
			},
			//跳转详情页
			goDetail(index){
				let data = JSON.stringify(this.dataList[index])
				uni.navigateTo({
					url:`/pages/read/read?data=${data}`
				})
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.data-list {
		text-align: center;
		display: flex;
		flex-wrap: wrap;
		flex: 1;
		// justify-content: center;
		margin: 0 20rpx;
		.data {
			position: relative;
			
			.item ,.add-books{
				border-radius: 8rpx;
				width: 188rpx;
				height: 260rpx;
				margin: 12rpx 24rpx;
					
				
			}
			.book-name{
				width: 236rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				 white-space: nowrap;
			}
			.book-img{
				width: 188rpx;
				height: 260rpx;
				border-radius: 8rpx;
			}
			.add-books{
				
				background-color:  rgba($color: #5EDAFE, $alpha: .7);
				image{
					position: absolute;
					width: 80rpx;
					height: 80rpx;
					top: 50%;
					left: 50%;
					transform: translate(-50%,-50%);
				}
			}
		}
		.is-delete{
			z-index: 99;
			position: absolute;
			border-radius: 8rpx;
			width: 188rpx;
			height: 260rpx;
			margin: 12rpx 24rpx;
			background-color: rgba($color: #000000, $alpha: .7);
			image{
				position: absolute;
				bottom: 20rpx;
				right: 20rpx;
				width: 40rpx;
				height: 40rpx;
			}
		}
		.select-delete{
			z-index: 100;
			background-color: rgba($color: #5EDAFE, $alpha: .7);
		}
			
		
	}
		
	
</style>

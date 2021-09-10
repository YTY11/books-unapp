<template>
	<view class="data-list">
		<view class="data" v-for="(item,index) in dataList" 
			@longtap="longtap">
			<view @click="selectDelete(index)" class="is-delete" :class="{'select-delete':item.delete}" v-show="isDelete">
				<image src="../../static/img/select/select.png"  v-if="!item.delete" />
				<image src="../../static/img/select/select_active.png" v-else/>
			</view>
			<view class="item">
				{{item.name}}
			</view>
			<text>{{item.id}}</text>
			
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
				newIsDelete:false
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
				console.log("ss")
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	.data-list {
		text-align: center;
		display: flex;
		flex-wrap: wrap;
		margin: 0 20rpx;
		.data {
			position: relative;
			.item ,.add-books{
				border-radius: 8rpx;
				width: 180rpx;
				height: 260rpx;
				background-color: red;
				margin: 12rpx 24rpx;
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
			position: absolute;
			border-radius: 8rpx;
			width: 180rpx;
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
			background-color: rgba($color: #5EDAFE, $alpha: .7);
		}
			
		
	}
		
	
</style>

<template>
	<view class="directory">
		<view class="title">{{directoryData.Name}}</view>
		<view class="" v-for="(list,index) in lists" :key="index">
			<view class="name">{{list.name}}:
			<u-gap class="gap" height="2" bg-color="#E5E5E5"></u-gap>
			</view>
			
			<view class="text" v-for="(item,index2) in list.list" :key="item.id" @click="readBook(index,index2,item.id)">
				{{item.name}}
				<u-gap class="gap" height="2" bg-color="#E5E5E5"></u-gap>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		name:"directory",
		props:{
			directoryData:{
				type:Object,
				default(){
					return{}
				}
			},
			lists:{
				type:Array,
				default(){
					return[]
				}
			}
		},
		
		data() {
			return {
				num:0
			};
		},
		methods:{
			//阅读
		 	readBook(index,index2,id){
				this.num = 0
				for (var i = 0; i < index; i++) {
					this.num = this.lists[i].list.length - 1				
				}
				this.num = this.num + index2
				let data = JSON.stringify(this.directoryData)
				let chapter = {
					Id:id,
					index:this.num
				}
				 chapter = JSON.stringify(chapter)
				uni.navigateTo({
					url:`/pages/read/read?data=${encodeURIComponent(data)}&chapter=${encodeURIComponent(chapter)}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.directory{
	padding: 20rpx 40rpx;
	.title{
		text-align: center;
		font-size: 35rpx;
		font-weight: bold;
		margin-bottom: 20rpx;
	}
	.name{
		font-weight: bold;
		font-size: 35rpx;
		margin-bottom:20rpx;
	}
	.text{
		font-size: 35rpx;
		margin-left: 20rpx;
		margin-bottom: 20rpx;
		&:hover{
			color: #7CD0EE;
		}
	}
	.gap{
		margin: 10rpx 0 !important;
	}
}
</style>

<template>
	<z-paging :refresher-enabled="!isShowDelete" auto-hide-loading-after-first-loaded  loading-more-no-more-text="我是有底线的" auto-show-back-to-top back-to-top-bottom="160rpx" back-to-top-img="../../static/img/top/top.png" class="z-paging" ref="paging" v-model="dataList" @query="queryList" empty-view-text="书架空空如也,快去书城挑选吧!">
		
		<view class="status_bar" slot="top">
			<view class="books-case-top" v-if="!isShowDelete">
				<u-search @change="searchChange" placeholder="搜索书名 · 作者" input-align="center" margin="12rpx 0" :show-action="false" v-model="keyword">
				</u-search>
				<u-notice-bar color="#3FD1FC" type="primary" mode="horizontal" :list="list"></u-notice-bar>
			</view>
			
			<view class="set-select" v-else="isShowDelete">
				<text @click="allSelect">{{textSelect}}</text>
				<text @click="escSelect">完成</text>
			</view>
		</view>
		
		<custom-refresher  slot="refresher" slot-scope="{refresherStatus}" :status="refresherStatus">
		</custom-refresher>
		<books-data-item :is-delete="isShowDelete"  :data-list="dataList"/>
		<view class="select-bottom" slot="bottom" v-show="isShowDelete">
			<text class="delete-count">选择了({{count}}本)</text>
			<text @click="show=true">删除</text>
		</view>
		<u-modal v-model="show" show-cancel-button @cancel="!show" @confirm="confirm" :content="content"></u-modal>
	</z-paging>
</template>

<script>
	
	//子组件
	import BooksDataItem from './booksDataItem.vue'
	//下拉刷新
	import CustomRefresher from '../custom-refresher/custom-refresher.vue'
	
	import {bookUtils} from '../../utils/bookUtils.js'
	export default{
		name:'BooksData',
		components:{
			BooksDataItem,
			CustomRefresher
		},
		props:{
			bookList:{
				type:Array,
				default(){
					return[]
				}
			}
		},
		data(){
			return{
				keyword: '',
				list: [
					'寒雨连江夜入吴',
					'平明送客楚山孤',
					'洛阳亲友如相问',
					'一片冰心在玉壶',
					'广告位招租!'
				],
				dataList:[],
				index:1,
				isShowDelete:false,
				show:false,
				
			}
		},
		watch:{
			isShowDelete(nd,od){
				if(!nd){
					this.dataList.forEach(item=>{
						item.delete = false
					})
				}
			},
			bookList(){
				this.dataList = this.bookList
			}
		},
		
		mounted() {
			this.$bus.$on('isLongTap',(data)=>{
				this.isShowDelete = data
			})
			
			
		},
		computed:{
			//全选切换
			textSelect(){
				return this.dataList.find(item=> item.delete == false) ? "全选":"取消全选"
			},
			//记录删除数
			count(){
				let countList = this.dataList.filter(item=>item.delete==true)
				return countList.length
			},
			//删除提示信息
			content(){
				return this.count > 0 ? "确认删除这"+this.count+"本书吗?" : "请选择要删除的书籍"
			}
		},
		methods:{
		  	queryList() {
				let data = []
				uni.showLoading({
					title: '加载中...'
				})
				setTimeout(()=>{
					let bookCaseData = uni.getStorageSync('BOOK_CASE_DATA')
					
					if (typeof bookCaseData !== 'object') {
						bookCaseData = []
					}
					this.dataList = bookCaseData
					uni.hideLoading();
					this.$refs.paging.complete(bookCaseData);
				},1000)
				
					

			},
			
			//全选
			allSelect(){
				if(this.textSelect === "全选"){
					this.dataList.forEach(item=>{
						item.delete = true
					})
					
				}
				else{
					this.dataList.forEach(item=>{
						item.delete = false
					})
				}
			},
			// 取消设置
			escSelect(){
				this.isShowDelete = false
			},
			//删除书籍
			deleteBooks(){
				this.dataList =	this.dataList.filter(item=>item.delete==false)
				this.isShowDelete = false
				uni.setStorageSync('BOOK_CASE_DATA',this.dataList)
				uni.showToast({
				    title: '删除成功',
				    duration: 2000
				});
			},
			//删除确认弹窗
			confirm(){
				this.show = false
				if(this.count > 0){
					this.deleteBooks()
				}
				
			},
			demo:bookUtils.debounce(value=>{
				
				
				// this.dataList 
				
			},300),
			//搜索框内容发生改变 使用防抖函数
			searchChange(value){
				let bookCaseData = uni.getStorageSync('BOOK_CASE_DATA')
				if (typeof bookCaseData !== 'object') {
					bookCaseData = []
				}
				let data = bookCaseData.filter(item=> item.Name.search(value) != -1)
				this.dataList = data
			},
		
		}
	}
</script>

<style lang="scss" scoped>
	.z-paging {
		bottom: 12rpx;
		padding-top: var(--status-bar-height);
	.status_bar{
		position: relative;
		.books-case-top{
			padding: 0 12rpx;
		}
		.set-select{
			background-color: #F7F7F7;
			height: 100rpx;
			margin-top: 50rpx;
			border-radius: 12rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 24rpx;
			text{
				
			}
		}
	}
	
		
	.select-bottom{
		height: 100rpx;
		width: 100%;
		background-color: #F7F7F7;
		box-shadow: -2rpx -2rpx 6rpx -2rpx rgba(0, 0 ,0 , .5);
		border-radius: 12rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 24rpx;
		.delete-count{
			color: #5EDAFE;
		}
	}
	}
	
	
	
	
</style>

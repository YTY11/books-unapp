<template>
	<view class="book-case">
			
		<!-- 展示书架书籍 -->
		<books-data :bookList="dataList"/>
		
	</view>
</template>

<script>
	import ZPagingMixin from '@/uni_modules/z-paging/components/z-paging/js/z-paging-mixin'

	//书架数据组件
	import BooksData from '../../components/book_case/booksData.vue'
	export default {
		mixins: [ZPagingMixin],
		data() {
			return {
				dataList: [],
			}
		},
		onHide(){
			this.$bus.$emit('isLongTap',false)
		},
		onShow() {
			let bookCaseData = uni.getStorageSync('BOOK_CASE_DATA')
			
			if (typeof bookCaseData !== 'object') {
				bookCaseData = []
			}
			this.dataList = bookCaseData
		},
		components:{
			BooksData
		},
		watch: {
			keyword(nv, ov) {
				console.log(nv, ov);
			}
		},

		mounted() {
			this.$bus.$on('goBooks',()=>{
				//跳转到书城
				uni.switchTab({
				    url: '/pages/books/books'
				});
			})
		}
	}
</script>

<style lang="scss" scoped>
	.book-case {
		padding: 0 12rpx;
		
	}
	
</style>

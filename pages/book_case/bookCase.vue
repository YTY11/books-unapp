<template>
	<view class="book-case">
			
		<!-- 展示书架书籍 -->
		<books-data/>
		
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
		components:{
			BooksData
		},
		watch: {
			keyword(nv, ov) {
				console.log(nv, ov);
			}
		},

		mounted() {
			// this.$bus.$on('isLongTap',(data)=>{
			// 	this.isShowDelete = data
			// })
		}
	}
</script>

<style lang="scss" scoped>
	.book-case {
		padding: 0 12rpx;
		
	}
	
</style>

<template>
	<view class="status_bar">
		<u-search placeholder="搜索书名 · 作者" @search="search" input-align="center" margin="12rpx 0" :show-action="false"
			v-model="keyword" clearabled>
		</u-search>

		<u-popup :closeable="true" @close="close" v-model="$store.state.books.show" mode="bottom" width="100%" height="400px" border-radius="14">
			<view class="content">
					 <z-paging :fixed="true"  ref="paging" width="100%" height="400px"   :hide-empty-view="true" auto-hide-loading-after-first-loaded loading-more-no-more-text="~~~~~~~~我是有底线的~~~~~~~~"
					auto-show-back-to-top back-to-top-bottom="160rpx" back-to-top-img="../../static/img/top/top.png" v-model="editorialData" @query="queryList">
						
							
						<EdAndPopItem v-for="(item,index) in editorialData" :item="item" :key="item.Id"/>
						
					</z-paging>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import EdAndPopItem from './edAndPopItem.vue'
	//网络数据
	import {seekBooks} from '../../api/seek.js'
	export default {
		name: "Seek",
		components:{
			EdAndPopItem
		},
		data() {
			return {
				keyword: '',
				editorialData:[],
				page:1
			}
		},
		methods: {
			queryList(){
				this.seekBooks(this.keyword,this.page++)
			},
			//搜索
			search() {				
				this.$store.commit('SET_SHOW', true)
				this.seekBooks(this.keyword,this.page)
			},
			//关闭
			close(){
				this.$store.commit('SET_SHOW', false)
				this.keyword = ''
				this.page = 1
			},
			//搜索数据
			seekBooks(name,page){
				seekBooks(name,page).then(res=>{
					if(res.info == "success"){
						this.$refs.paging.complete(res.data);
						// this.editorialData = res.data
					}
				}).catch(err=>{
					console.log(err);
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{height:100%}
	.status_bar {
		padding: 0 12rpx;
		.content {
			height: 100%;
			width: 100%;
			padding: 24rpx;
			text-align: center;
		}
	}
</style>

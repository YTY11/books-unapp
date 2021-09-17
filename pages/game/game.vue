<template>
	<view class="game">
		<view class="centent">
			<web-view :src="data.path">
				
			</web-view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:{}
			}
		},
		onLoad(option) {
			this.data =  JSON.parse(decodeURIComponent(option.data))
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.centent{
	
	width: 100%;
	height: 100%;
}
</style>

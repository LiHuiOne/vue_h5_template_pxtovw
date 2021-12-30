<template>
	<div class="homeContainer">
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item>1</van-swipe-item>
			<van-swipe-item>2</van-swipe-item>
			<van-swipe-item>3</van-swipe-item>
			<van-swipe-item>4</van-swipe-item>
		</van-swipe>
		<van-grid :column-num="3">
			<van-grid-item v-for="value in 9" :key="value" icon="photo-o" text="文字" />
		</van-grid>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data() {

		},
		mounted() {
			this.$api.getUserInfo({
				userame: 'ooooo'
			}).then(res => {})
		},
		methods: {
			to() {
				this.$router.push({
					path: '/about'
				})
			}
		},
	}
</script>
<style lang="less">
	.homeContainer {
		.my-swipe .van-swipe-item {
			height: 400px;
			color: #fff;
			background-color: #39a9ed;
		}
		.van-grid{
			margin-top: 20px;
		}
	}
</style>
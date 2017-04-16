	<template>
		<div>
			<el-carousel :interval="4000" type="card" height="600px">
				<el-carousel-item v-for="item in datasource.CarouselData" :key="item.id">
					<img :src="item.src" :alt="item.name">
				</el-carousel-item>
			</el-carousel>
	<!-- 		<el-row style="margin-bottom:20px;">
				<el-col :span="8" v-for="(card, index) in datasource.CardData" :key="card.id" :offset="2">
					<el-card >
						<img :src="card.img" class="image">
						<div style="padding: 14px;">
							<h3>{{card.title}}</h3>
							<p>使用技术：{{card.tech}}</p>
							<div class="bottom clearfix">
								<time class="time">{{ card.createTime }}</time>
								<el-button type="text" class="button" @click="preview(card.url)">查看</el-button>
							</div>
						</div>
					</el-card>
				</el-col>
			</el-row> -->
		</div>
	</template>
	<script>

		export default {
			data: function () {
				return {
					datasource: {
						CarouselData: [{id: 1, src: '../../static/carousel/pic1.jpg', name: 'hali1'},
						{id: 2, src: '../../static/carousel/pic2.jpg', name: 'pic1'},
						{id: 3, src: '../../static/carousel/pic3.jpg', name: 'pic2'},
						{id: 4, src: '../../static/carousel/pic4.jpg', name: 'pic3'},
						{id: 5, src: '../../static/carousel/pic5.jpg', name: 'pic4'},
						{id: 6, src: '../../static/carousel/pic6.jpg', name: 'pic5'},
						{id: 7, src: '../../static/carousel/pic7.jpg', name: 'pic6'},
						{id: 8, src: '../../static/carousel/pic8.jpg', name: 'pic7'}]
						// CardData: [{id: 1, createTime: '2017年2月', title: '山寨饿了么', tech: 'Vue,Vue-Route,WebPack', url: 'http://liuzhuang.tech/eleme/eleme.html', img: '../../static/card/eleme.jpg'},
						// {id: 2, createTime: '2017年1月', title: '购物车', tech: 'Vue', url: 'http://liuzhuang.tech/vue/vue.html', img: '../../static/card/cart.jpg'}]
					}
				};
			},
			methods: {
				preview: function (url) {
					window.open(url);
				}
			}
		};
	</script>
	<style scoped>
		/*.el-carousel__item h3 {
			color: #475669;
			font-size: 14px;
			opacity: 0.75;
			line-height: 200px;
			margin: 0;
		}

		.el-carousel__item:nth-child(2n) {
			background-color: #99a9bf;
		}

		.el-carousel__item:nth-child(2n+1) {
			background-color: #d3dce6;
		}

		.time {
			font-size: 13px;
			color: #999;
		}

		.bottom {
			margin-top: 13px;
			line-height: 12px;
		}

		.button {
			padding: 0;
			float: right;
		}

		.image {
			width: 80px;
			text-align: center;
		}

		.clearfix:before,
		.clearfix:after {
			display: table;
			content: "";
		}

		.clearfix:after {
			clear: both
		}*/
	</style>

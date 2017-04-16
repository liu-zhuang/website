<template>
	<el-row>
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
	</el-row>
</template>
<script>
	export default {
		data: function () {
			return {
				datasource: {
					CardData: [{id: 1, createTime: '2017年2月', title: '山寨饿了么', tech: 'Vue,Vue-Route,WebPack', url: 'http://liuzhuang.tech/eleme/eleme.html', img: '../../static/card/eleme.jpg'},
					{id: 2, createTime: '2017年1月', title: '购物车', tech: 'Vue', url: 'http://liuzhuang.tech/vue/vue.html', img: '../../static/card/cart.jpg'}]
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
	.el-row{
		margin-top: 20px;
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
		width: 100px;
		text-align: center;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}
</style>

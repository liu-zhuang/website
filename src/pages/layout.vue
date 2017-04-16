<template>
	<div>
		<el-menu theme="light" :default-active="activeIndex" :router="true" mode="horizontal" @select="handleSelect">
			<el-menu-item index="/home">
				<!-- <i class="el-icon-picture"></i> -->
				<img src="../assets/wx.jpg" height="50"  alt="" style="vertical-align:middle; border-radius:50%;">
			</el-menu-item>
			<el-menu-item index="/home"><a href="javascript:void 0" target="_blank">Uncle's WebSite</a></el-menu-item>
			<el-submenu index="2">
				<template slot="title">Front-End</template>
				<el-menu-item index="/showcase"  >ShowCase</el-menu-item>
				<el-menu-item index="/yesno">YesNo?</el-menu-item>
				<!-- <el-menu-item index="2-3">选项3</el-menu-item> -->
			</el-submenu>
			<el-menu-item index="webpack"><a href="javascript:void 0" target="_blank">WebPack</a></el-menu-item>
			<el-menu-item index="book"><a href="javascript:void 0" target="_blank">Book</a></el-menu-item>
		</el-menu>
		<section id="main">
			<router-view></router-view>	
		</section>		
		<footer class="footer">
			<el-row :gutter="20" :align="middle">
				<el-col :span="5" :offset="4"><a href="http://liuzhuang.tech" target="_blank"><i class="fa fa-copyright"></i>liuzhuang.tech</a></el-col>
				<el-col :span="5" :offset="5"><a href="https://github.com/liu-zhuang" target="_blank"><i class="fa fa-github" style="font-size:24px;"></i></a></el-col>
				<el-col :span="5">
					<el-popover
					ref="popoverWeixin"
					placement="top"
					title="微信"
					width="50"
					trigger="hover"
					content="">
					<div >
						<img src="../assets/wx.jpg" height="50" alt="">	
					</div>					
				</el-popover>
				<i class="fa fa-weixin" style="font-size:24px;" v-popover:popoverWeixin></i>
			</el-col>
		</el-row>
	</footer>
</div>
</template>
<script>
	export default {
		data () {
			return {
				activeIndex: '1',
				activeIndex2: '1',
				middle: 'middle'
			};
		},
		methods: {
			handleSelect (key, keyPath) {
				console.log(key, keyPath);
			}
		}
	};
</script>
<style>
	
	#main {
		min-height: 100%;
	}

	a {
		text-decoration: none;
	}

	.footer {
		height: 60px;
		background-color:rgb(238,241,246);
		color: #a4aebd;
		width:100%;
		z-index: 1000;
		position: fixed;
		bottom: 0;
		left: 0;
		line-height: 60px;
	}

	.footer a {
		font-size:18px;
		color:#a4aebd;
		text-decoration: none;
	}

	.el-popover {
		min-width: 0px;
	}
</style>

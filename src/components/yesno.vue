<template>
	<div>
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">HomePage</el-breadcrumb-item>
			<el-breadcrumb-item>YesNo?</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form ref="formYesNo" :model="form" label-width="180px">
			<el-form-item label="Write Your Question" prop="question">
				<el-input v-model="form.question"></el-input>
			</el-form-item>
		</el-form>
		<p class="answer">
			<span>{{answer.answer}}</span>
			<img v-if="answer.image" :src="answer.image" :alt="answer.answer">
		</p>
	</div>
</template>
<script>
	import _ from 'lodash';

	export default {
		data: function () {
			return {
				form: {
					question: ''
				},
				q: '',
				answer: {
					answer: '',
					image: ''
				}
			};
		},
		watch: {
			// form: {
			// 	handler: function (val, oldVal) {
			// 		debugger;
			// 		console.log(val, oldVal);
			// 	},
			// 	deep: true
			// }
			'form.question': function (val, oldVal) {
				this.answer.answer = 'Waiting for you to stop typing...';
				this.getAnswer();
			}
		},
		methods: {
			getAnswer: function () {
				_.debounce(function () {

				}, 500);
			}
		}
	};
</script>
<style scoped>
	.el-breadcrumb {
		margin-top:20px;
		margin-left: 30px;
	}
	.el-form {
		margin-top: 20px;
		width:50%;
	}

	.answer {
		margin-left: 30px;
		margin-top:20px;
	}
</style>

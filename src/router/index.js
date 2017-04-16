import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../components/homepage';
import ShowCase from '../components/showcase';
import YesNo from '../components/yesno';

Vue.use(Router);

export default new Router({
	routes: [
	{
		path: '/',
		component: HomePage
	},
	{
		path: '/home',
		component: HomePage
	},
	{
		path: '/showcase',
		component: ShowCase
	},
	{
		path: '/yesno',
		component: YesNo
	}
	]
});

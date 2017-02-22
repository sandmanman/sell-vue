// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

// components
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

// css
import 'common/scss/style.scss';

// use
Vue.use(VueRouter);
Vue.use(VueResource);

var app = Vue.extend(App);

var router = new VueRouter({
	linkActiveClass: 'active'
});

router.map({
	'/goods': {
		component: goods
	},
	'/ratings': {
		component: ratings
	},
	'/seller': {
		component: seller
	}
});

router.start(app, '#app');

router.go('/goods');

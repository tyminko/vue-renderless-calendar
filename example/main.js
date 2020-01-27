import Vue from 'vue';
import App from './App.vue';
import { RenderlessCalendar } from '../lib';

Vue.config.productionTip = false;

Vue.component('RenderlessCalendar', RenderlessCalendar);

new Vue({
  render: h => h(App)
}).$mount('#app');

import Vue from 'vue'
import App from './App.vue'
import router from './router';
// Include Dependencies
import VueFusionCharts from 'vue-fusioncharts';
// import FusionCharts modules and resolve dependency
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTimes, faUser, faHome, faUserLock, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
//
library.add(faEdit, faTimes, faUser, faHome, faUserLock, faUserPlus);
//
Vue.component('font-awesome-icon', FontAwesomeIcon)
//
Vue.use(VueFusionCharts, FusionCharts, Charts);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

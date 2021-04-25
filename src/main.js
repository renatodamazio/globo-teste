import Vue from 'vue'
import App from './App.vue'
import router from './router';
import firebase from "firebase";
import VueToast from 'vue-toast-notification';
// Include Dependencies
import VueFusionCharts from 'vue-fusioncharts';
// import FusionCharts modules and resolve dependency
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import 'vue-toast-notification/dist/theme-sugar.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTimes, faUser, faHome, faUserLock, faUserPlus, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faEdit, faTimes, faUser, faHome, faUserLock, faUserPlus, faBars);
//
Vue.component('font-awesome-icon', FontAwesomeIcon)
//

var firebaseConfig = {
  apiKey: "AIzaSyBgWtSsKGRqtkmrJwErVnNsI2G2Phgo6ns",
  authDomain: "globo-teste-8e665.firebaseapp.com",
  projectId: "globo-teste-8e665",
  storageBucket: "globo-teste-8e665.appspot.com",
  messagingSenderId: "770794264262",
  appId: "1:770794264262:web:380aa9700c1e6b7cf1e9c7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.use(VueFusionCharts, FusionCharts, Charts);
Vue.use(VueToast);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

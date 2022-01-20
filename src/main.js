import Vue from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import App from './App.vue'

import './scss/app.scss';
import router from './router'
// import './plugins/click-away'

Vue.use(Antd);
Vue.config.productionTip = false


import DefaultLayout from './layouts/Default.vue'
import DashboardLayout from './layouts/Dashboard.vue'
import DashboardRTLLayout from './layouts/DashboardRTL.vue'
import DefaultHeader from './components/Headers/DefaultHeader' ;
import DefaultFooter from './components/Footers/DefaultFooter' ;

Vue.component("layout-default", DefaultLayout);
Vue.component("layout-dashboard", DashboardLayout);
Vue.component("layout-dashboard-rtl", DashboardRTLLayout);
Vue.component("DefaultHeader", DefaultHeader);
Vue.component("DefaultFooter", DefaultFooter);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
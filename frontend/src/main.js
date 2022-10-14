import Vue from 'vue'
import antd from 'ant-design-vue'
import { message } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less';
import App from './App'
import router from './router'
import { VueAxios } from './utils/request'
import { ipc } from '@/utils/ipcRenderer'

import native from "@/api/native/native";

import "@/assets/font/window/iconfont.css";

import "@/utils/resize";

// 使用antd
Vue.use(antd)

Vue.use(native);

// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios)

// 全局注入IPC通信
Vue.prototype.$ipc = ipc;

Vue.prototype.$message = message;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

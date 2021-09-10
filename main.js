import Vue from 'vue'
import App from './App'
//引入uView组件
import uView from "uview-ui";
Vue.use(uView);
Vue.config.productionTip = false

App.mpType = 'app'

//事件总线
Vue.prototype.$bus = new Vue()
const app = new Vue({
	
    ...App,
	
})
app.$mount()

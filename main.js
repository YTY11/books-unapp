import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import {bookUtils} from'utils/bookUtils.js'

//引入uView组件
import uView from "uview-ui";
Vue.use(uView);
Vue.config.productionTip = false

App.mpType = 'app'

//事件总线
Vue.prototype.$bus = new Vue()

Vue.prototype.$bookUtils = bookUtils
const app = new Vue({
	store,
    ...App,
	
})
app.$mount()

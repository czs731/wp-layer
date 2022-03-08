import { createApp } from 'vue'
import App from './App.vue'

let vueApp = createApp(App);

import route from "./components/route.js";
vueApp.use(route);

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
vueApp.use(ElementPlus, { locale : zhCn });

import wp from "./packages/index.js";
vueApp.use(wp);

vueApp.mount('#app')

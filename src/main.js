import Vue from 'vue'
import App from './App.vue'
import AgoraRtcVue from "agora-rtc-vue";
import "agora-rtc-vue/lib/agora-rtc-vue.css";
Vue.config.productionTip = false
Vue.use(AgoraRtcVue,{
  appid: "303cfb9c7e6146978882ff85e63924f9",
  token: "006303cfb9c7e6146978882ff85e63924f9IAAnZhY+PQJwIWvVV2G5xBcvkGMbjpjDh5h9YpkC+WRmmesTtdsAAAAAEAAtDEjTx0vfYgEAAQDGS99i"
});

new Vue({
  render: h => h(App),
}).$mount('#app')

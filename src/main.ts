import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import LottieAnimation from "lottie-web-vue";

createApp(App).mount('#app')
App.use(LottieAnimation);
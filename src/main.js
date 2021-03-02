import { createApp } from 'vue'
import App from './App.vue'
import Basecard from './components/BaseCard.vue'

const app=createApp(App)
app.component('base-card',Basecard);
app.mount('#app')

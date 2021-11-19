import { createApp } from 'vue'
import App from './App.vue'
import router from '@/app/router'

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import SpeedDial from 'primevue/speeddial';
import Toast from "primevue/toast";
import { ToastService } from "@/service/toast";

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App)
app.use(router)

app.use(PrimeVue);
app.use(ToastService);

app.component('Button', Button);
app.component('Toast', Toast);
app.component('SpeedDial', SpeedDial);

app.mount('#app')

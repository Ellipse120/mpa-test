import {createApp} from 'vue'
import Other from './App.vue'
import router from '../other/router'
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(Other)

app.use(router)
app.use(PrimeVue);
app.use(ToastService);

app.component('Dialog', Dialog);
app.component('Button', Button);
app.component('Toast', Toast);

app.mount('#app')


import './bootstrap';

import App from './src/App.vue';
import {createApp} from 'vue';
//#app: welcome.blade.php에 추가한 app div
const app = createApp(App);

app.component('create-student', require('./components/CreateStudent.vue').default);

// 마운트합니다.
app.mount("#app");
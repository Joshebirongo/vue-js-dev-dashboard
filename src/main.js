// Import the main function to create the Vue application
import { createApp } from 'vue'
// Import the main App component
import App from './App.vue'
//Import the Vue application router
import router from "./router/index.js"
// Import the router from "./router"

import "./styles/App.css"

/* 
    *Create the Vue application inside the HTML element 
    *with the id 'app' and use the Vue.js router
*/

// CreateApp(App).use(router).mount('#app)

createApp(App)
    .use(router)
    .mount('#app');

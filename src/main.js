import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Create the main application instance
const app = createApp(App);

// Register the router with the application
app.use(router);

// Mount the application to the page
app.mount("#app");

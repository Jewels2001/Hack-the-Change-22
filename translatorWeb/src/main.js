import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import * as firebase from 'firebase/app'
import { getAuth } from "firebase/auth";
import firebaseConfig from '../firebaseConfig.js'
const fbApp = firebase.initializeApp(firebaseConfig)

import './assets/main.css'

const app = createApp(App)
const auth = getAuth(fbApp);

app.use(router)

app.mount('#app')

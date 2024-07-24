import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 사용할 아이콘 불러오기
import {faUserSecret, faBarsStaggered, faLocationDot,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import store from './store/store'/////
//코드하이픈 사용안됨 faBasStaggered로 등록
// 아이콘 등록하기
library.add(faUserSecret, faBarsStaggered, faLocationDot, faMagnifyingGlass);


createApp(App).
use(store)./////////store연결
component('font-awesome-icon', FontAwesomeIcon)./////////////////////
mount('#app')

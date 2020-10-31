import { createRouter, createWebHashHistory } from 'vue-router'
import { store } from '../store'

import StickerList from '../views/StickerList.vue'
import TradeList from '../views/TradeList.vue'
import TradePoint from '../views/TradePoint.vue'
import UserList from '../views/UserList.vue'

const routes = [
    { path: "/", name: "Home", component: UserList },
    { path: "/stickers_list", name: "Lista de figurinhas", component: StickerList },
    { path: "/trade_points", name: "Pontos de troca", component: TradePoint },
    { path: "/login", name: "Lista de usuár
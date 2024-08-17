import Admin from './pages/Admin'
import Basket from './pages/Basket'
import Shop from './pages/Shop'
import Auth from './pages/Auth'
import ItemPage from './pages/ItemPage/ItemPage'
import {ADMIN_ROUTE, BASKET_ROUTE, ITEM_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, SHOP_ROUTE, INFO_ROUTER} from './utils/consts'
import ItemsPage from './pages/ItemsPage/ItemsPage'
import Info from './pages/infopage/Info'


// Массивы роутов с публичными, и не публичными компонентами
export const AuthRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE + '/:id',
        Component: Basket
    },
    {
        path: ITEM_ROUTE + '/:id',
        Component: ItemPage
    },
    {
        path: ITEM_ROUTE,
        Component: ItemsPage
    },
    {
        path: INFO_ROUTER,
        Component: Info
    },
]

export const PublicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: INFO_ROUTER,
        Component: Info
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTER_ROUTE,
        Component: Auth
    },
    {
        path: ITEM_ROUTE + '/:id',
        Component: ItemPage
    },
    {
        path: ITEM_ROUTE,
        Component: ItemsPage
    },
]
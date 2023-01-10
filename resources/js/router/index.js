import createRouter from '@spaceavocado/svelte-router'
import productIndex from '../components/products/index.svelte'
import page404 from '../components/404.svelte'
const routes = [
    {
        path:'/',
        component: productIndex
    },
    {
        path: '/pathMatch(.*)*',
        component: page404
    }
]

const router = createRouter({
    routes,
})

export default router
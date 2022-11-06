import { HomePage } from "./pages/home-page.jsx"


// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: "/home",
        component: <HomePage />,
        label: "Home",
    },
]

export default routes

import { HomePage } from "./pages/home-page.jsx"


// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: "/tesla-clone/",
        component: <HomePage />,
        label: "Home",
    },
]

export default routes

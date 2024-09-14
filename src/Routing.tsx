import { Route, Routes } from "react-router-dom"
import Blog from "./routingComponent/Blog"
import App from "./App.tsx"

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
    )
}

export default Routing
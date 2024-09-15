import { Route, Routes } from "react-router-dom"
import Blog from "./routingComponent/Blog"
import App from "./App.tsx"
import BlogPost1 from "./blog/BlogPost1.tsx"

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/customize-css-in-tailwind-css" element={<BlogPost1/>}/>
        </Routes>
    )
}

export default Routing
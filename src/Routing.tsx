import { Route, Routes } from "react-router-dom"
import Blog from "./pages/Blog.tsx"
import App from "./App.tsx"
import BlogPost1 from "./blog/BlogPost1.tsx"
import BlogPost2 from "./blog/BlogPost2.tsx"
import Certificate from "./component/Certificate.tsx"
import GitHubComponent from "./component/GitHubComponent.tsx"
import Spotify from "./pages/Spotify.tsx"

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/customize-css-in-tailwind-css" element={<BlogPost1 />} />
            <Route path="/blog/After-refreshing-vercel-website-why-404-code-not-found-error-is-showing" element={<BlogPost2 />} />
            <Route path="/component" element={<Certificate />} />
            <Route path="/github" element={<GitHubComponent />} />
            <Route path="/spotify" element={<Spotify />} />
        </Routes>
    )
}

export default Routing
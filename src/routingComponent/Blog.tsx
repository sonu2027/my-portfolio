import { useBlog } from "../customHooks/useBlog.ts"
import BlogComponent from "../blog/BlogComponent.tsx"
import { Helmet, HelmetProvider } from "react-helmet-async"

function Blog() {

  const arr = useBlog()

  return (
    <HelmetProvider>
      <div className="bg-gray-100">
        <Helmet>
          <meta
            name="description"
            content="My name is Sonu Mondal and this page is for writing coding blog. Explore my page for more details"
          />
          <title>Sonu Mondal blog</title>
        </Helmet>
        <h1 className="py-2 pl-10 text-4xl font-semibold">Coding Articles</h1>
        <div className=" py-4 pl-4 pr-4 flex flex-col gap-y-6 xs:pl-8">
          {
            arr.map((e) => <BlogComponent key={e.title} title={e.title} about={e.about} date={e.date} sup={e.sup} month={e.month} year={e.year} route={e.route} />)
          }
        </div>
      </div>
    </HelmetProvider>
  )
}

export default Blog
import { useBlog } from "../customHooks/useBlog.ts"
import BlogComponent from "../blog/BlogComponent.tsx"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { useState } from "react"
import ListSmallScreen2 from "../component/ListSmalScreen2.tsx"
import NavBar2 from "../component/NavBar2.tsx"

function Blog() {

  const [showList, setShowList] = useState<boolean>(false)
  const arr = useBlog()

  return (
    <HelmetProvider>
      <div className="bg-gray-100">
        <Helmet>
          <meta
            name="description"
            content="My name is Sonu Mondal and this page is for writing coding blog. Explore my page for more details"
          />
          <meta name="keywords" content="Blog, Sonu Mondal blog, Sonu Mondal blog page" />
          <title>Sonu Mondal blog</title>
        </Helmet>
        <div className="px-4 bg-blue-100 shadow-gray-300 shadow-md border-b-violet-200 border-2 border-solid sticky top-0 z-20">
          <NavBar2 heading3={"Read Blog"} showList={showList} setShowList={setShowList} />
        </div>
        <ListSmallScreen2 showList={showList}/>
        <h1 className=" text-2xl md:text-3xl font-semibold text-center py-2 sticky top-14 bg-gray-100 shadow-sm shadow-gray-300 text-violet-600 underline">Coding Articles</h1>
        <div className=" py-4 pl-4 pr-4 flex flex-col gap-y-6 xs:pl-8 justify-center items-center">
          {
            arr.map((e) => <BlogComponent key={e.title} title={e.title} about={e.about} date={e.date} sup={e.sup} month={e.month} year={e.year} route={e.route} />)
          }
        </div>
      </div>
    </HelmetProvider>
  )
}

export default Blog
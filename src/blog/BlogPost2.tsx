import img1 from "../assets/blog/blog2/img1.png"
import img2 from "../assets/blog/blog2/img2.png"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { useState } from "react"
import NavBar2 from "../component/NavBar2"
import ListSmallScreen2 from "../component/ListSmalScreen2"

function BlogPost2() {

  const location = useLocation()
  const urlData = new URLSearchParams(location.search)
  const title = urlData.get("title")
  const date = urlData.get("date")
  const month = urlData.get("month")
  const year = urlData.get("year")
  const sup = urlData.get("sup")

  const [showList, setShowList] = useState<boolean>(false)

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta
            name="description"
            content="In this guide I will guide you step by step that how can you solved the page refreshing error in vercel which is showing you after refreshing the website 404 code not found."
          />
          <meta name="keywords" content="Vercel, Vercel 404 code not found, Vercel 404 error, Page refreshing error in react, Page refreshing error in vercel, blog, article, Sonu Mondal" />
          <title>{title} </title>
        </Helmet>
        <div className="px-4 bg-blue-100 shadow-gray-300 shadow-md border-b-violet-200 border-2 border-solid sticky top-0 z-10">
          <NavBar2 heading3={"Read Blog"} showList={showList} setShowList={setShowList} />
        </div>
        {
          showList &&
          <ListSmallScreen2 />
        }
        <div className="bg-gray-100 sm:pt-8 sm:pb-8 flex justify-center items-center">

          <div className="bg-white px-2 py-2 sm:mx-6 sm:px-4 sm:py-6 sm:rounded-md sm:shadow-sm sm:shadow-gray-400 md:w-60rem">
            <h1 className="text-xl text-center md:text-2xl font-medium">{title}</h1>
            <div className="mt-4 mb-4">
              <div className="flex justify-center items-center gap-x-1">
                <Link to="/"><img className="h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-full border-1 border-solid border-gray-300" src="../pp.jpg" alt="image" /></Link>
                <Link to="/"><p className="text-xs xs:text-base">Sonu Mondal</p></Link>
                <div className="flex justify-center items-center gap-x-1 pl-2">
                  <p className="h-1 w-1 rounded-full bg-gray-600 font-medium"></p>
                  <p className="text-gray-600 text-xs xs:text-base">{date}<sup>{sup}</sup> {month} {year}</p>
                </div>
              </div>
            </div>
            <p className="mt-2 mb-2">In this guide I will guide you step by step that how can you solved the page refreshing error in vercel which is showing you after refreshing the website 404 code not found.</p>
            <h2 className="text-xl font-medium">Step 1: create vercel.json file in root of the project.</h2>
            <img className="mt-2 md:w-50rem" src={`${img1}`} alt="image" />
            <p><b>Note: </b>Make sure that index.html file is also in the route. Iff not then move the vercel.json file to the foler where index.html file is there.</p>
            <h2 className="text-xl font-medium mt-4">Step 2. Write the below code in your vercel.json folder</h2>
            <img className="mt-2 md:w-50rem" src={`${img2}`} alt="image" />
            <p className="mt-3"><b>Copy the code from below and paste it on vercel.json file</b></p>
            <pre className="bg-slate-800 text-gray-300 mt-2 xs:w-96 px-2 py-2 rounded-md">
              <code>{
                `{ 
"version": 2, 
"rewrites": [{ "source": "/(.*)",
"destination": "/" }] 
}`
              }
              </code>
            </pre>

            <p className="mt-3"><b>Conclusion:</b> Now the last step is to push the code on github and you will see that the your problem has solved</p>
          </div>
        </div>
      </div>
    </HelmetProvider>
  )
}

export default BlogPost2
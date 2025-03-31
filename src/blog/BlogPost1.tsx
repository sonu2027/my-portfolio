import img1 from "../assets/blog/blog1/img1.png"
import img2 from "../assets/blog/blog1/img2.png"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { useState } from "react"
import NavBar2 from "../component/NavBar2"
import ListSmallScreen2 from "../component/ListSmalScreen2"

function BlogPost1() {

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
            content="In this guide I will guide you step by step that how can you you customize CSS in Tailwind CSS. Many time we need to set borderWidth 1px but tailwind doesn't provide. The tailwind borderWidth start from 2px but we can set it to 1px by defining some extra code in tailwindconfig.js file. It is very esy to do and very easy to use. Just follow the step by step guide"
          />
          <meta name="keywords" content="Customize CSS in tailwind CSS, Blog, Blog Page, Sonu Mondal blog, Sonu Mondal blog page"/>
          <title>{title} </title>
        </Helmet>
        <div className="px-4 bg-blue-100 shadow-gray-300 shadow-md border-b-violet-200 border-2 border-solid sticky top-0 z-10">
          <NavBar2 heading3={"Read Blog"} showList={showList} setShowList={setShowList} />
        </div>
        <ListSmallScreen2 showList={showList}/>
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
            <p className="mt-2 mb-2">In this guide I will guide you step by step that how can you you customize CSS in Tailwind CSS. Many time we need to set borderWidth 1px but tailwind doesn't provide. The tailwind borderWidth start from 2px but we can set it to 1px by defining some extra code in tailwindconfig.js file. It is very esy to do and very easy to use. Just follow the step by step guide</p>
            <h2 className="text-xl font-medium">Step 1: Go to the tailwindconfig.js file</h2>
            <img className="mt-2 md:w-50rem" src={`${img1}`} alt="image" />
            <p>{`Here, you can see extend:{ } object where you you have to customize the css so that you can apply it on your code`}</p>
            <h2 className="text-xl font-medium mt-4">{`Step 2: Write your CSS in extend:{ } object`}</h2>
            <p className="mt-2">{`In below image you can see I have a written some CSS in extend:{ } object`}</p>
            <img className="mt-2 md:w-50rem" src={`${img2}`} alt="image" />
            <pre className="bg-slate-800 text-gray-300 mt-2 xs:w-96 px-2 py-2 rounded-md">
              <code>
                {`extend: {
  borderWidth: {
    "1": "1px",
  },
  width: {
    "50rem": "800px",
  },
  screens: {
    xs: "500px",
  },
}`}
              </code>
            </pre>
            <h2 className="text-xl font-medium mt-4">Step 3: How to use in code</h2>
            <h3 className="font-medium mt-2">Example 1: For borderWidth</h3>
            <pre className="bg-slate-800 text-gray-300 px-2 py-1 rounded-md xs:w-96">
              <code>
                {
                  `<div className="border-1">Hello</div>`
                }
              </code>
            </pre>
            <p>It will set the border width to 1px</p>
            <h3 className="font-medium mt-2">Example 2: For media query</h3>
            <pre className="bg-slate-800 text-gray-300 px-2 py-1 rounded-md xs:w-96">
              <code>
                {
                  `<div className="xs:w-96">Hello</div>`
                }
              </code>
            </pre>
            <p>It will set the width 96 if the screen size goes to xs means 500px</p>
            <h3 className="font-medium mt-2">Example 3: For width</h3>
            <pre className="bg-slate-800 text-gray-300 px-2 py-1 rounded-md xs:w-96">
              <code >
                {
                  `<div className="w-50rem">Hello</div>`
                }
              </code>
            </pre>
            <p>It will set the width to 50rem that we have define 800px in our code so that the width will be 500px</p>
          </div>
        </div>
      </div>
    </HelmetProvider>
  )
}

export default BlogPost1
import NavBar from "./component/NavBar.tsx"
import ListSmallScreen from "./component/ListSmallScreen.tsx"
import { useState } from "react"
import Intro from "./component/Intro.tsx"
import SkillSection from "./component/SkillSection.tsx"
import ProjectSection from "./component/ProjectSection.tsx"
import { IoMdArrowDropupCircle } from "react-icons/io";
import Education from "./component/Education.tsx"

function App() {

  const [showList, setShowList] = useState<boolean>(false)
  const [showGoToTop, setShowGoToTop] = useState<boolean>(false)

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setShowGoToTop(true)
    }
    else {
      setShowGoToTop(false)
    }
  })

  return (
    <div onClick={() => setShowList(false)} className="bg-blue-50">
      <div className="px-4 bg-blue-100 shadow-gray-300 shadow-md border-b-violet-200 border-2 border-solid sticky top-0 z-10">
        <NavBar showList={showList} setShowList={setShowList} />
      </div>
      {
        showList &&
        <ListSmallScreen showList={showList} setShowList={setShowList} />
      }
      <Intro />
      <SkillSection />
      <ProjectSection />
      {
        showGoToTop && <IoMdArrowDropupCircle onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth", // optional: for smooth scrolling
          });
        }} className="fixed bottom-4 right-4 text-4xl text-green-500 hover:cursor-pointer" />
      }
      <div id="education"
        className="text-2xl md:text-3xl mt-14 font-medium mx-4 sm:mx-8 md:mx-12 lg:mx-20 skill"
      >
        Education
      </div>
      <Education />
    </div>
  )
}

export default App
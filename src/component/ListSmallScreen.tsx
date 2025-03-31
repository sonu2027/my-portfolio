import { Link } from "react-router-dom"
import CodingProfileHeading from "./CodingProfileHeading.tsx"
import { useState } from "react"
import ListItem from "./ListItem.tsx"

type props = {
    showList: boolean;
    setShowList: React.Dispatch<React.SetStateAction<boolean>>;
}

function ListSmallScreen({ showList, setShowList }: props) {

    const [showCodingProfile, setShowCodingProfile] = useState<boolean>(false)
    const ULstyle: string = " py-1"

    const handleScroll = (work: String, e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        if (work == "skill") {
            const skill = document.getElementById("skill")
            if (skill) {
                skill.scrollIntoView({ behavior: "smooth" })
            }
        }
        if (work == "project") {
            const project = document.getElementById("project")
            if (project) {
                project.scrollIntoView({ behavior: "smooth" })
            }
        }
        if (work == "education") {
            const education = document.getElementById("education")
            if (education) {
                education.scrollIntoView({ behavior: "smooth" })
            }
        }
        if (work == "achievement") {
            const achievement = document.getElementById("achievement")
            if (achievement) {
                achievement.scrollIntoView({ behavior: "smooth" })
            }
        }
        setShowList(!showList)
    }

    return (
        <div onClick={(e) => e.stopPropagation()} className={`flex justify-center items-center bg-blue-50 shadow-gray-300 shadow-md md:hidden fixed w-[100vw] top-14 z-10 transition-all duration-1000 ease-in-out transform ${showList ? 'translate-y-0 opacity-100' : '-translate-y-96 opacity-0'}`}>
            <ul className="py-2">
                <li onClick={(e) => handleScroll("skill", e)} className="text-center hover:cursor-pointer text-xl py-1 hover:border-b-2 hover-border-b-solid hover:border-b-violet-600 hover:text-violet-600">Skills</li>
                <li onClick={(e) => handleScroll("project", e)} className="text-center hover:cursor-pointer text-xl py-1 hover:border-b-2 hover-border-b-solid hover:border-b-violet-600 hover:text-violet-600">Project</li>
                <li onClick={(e) => handleScroll("achievement", e)} className="text-center hover:cursor-pointer text-xl py-1 hover:border-b-2 hover-border-b-solid hover:border-b-violet-600 hover:text-violet-600">Achievement</li>
                <li onClick={(e) => handleScroll("education", e)} className="text-center hover:cursor-pointer text-xl py-1 hover:border-b-2 hover-border-b-solid hover:border-b-violet-600  hover:text-violet-600">Education</li>
                <li className="">
                    <div className="flex">
                        <CodingProfileHeading showCodingProfile={showCodingProfile} setShowCodingProfile={setShowCodingProfile} />
                    </div>
                    {
                        showCodingProfile &&
                        <ListItem ULstyle={ULstyle} />
                    }
                </li>
                <Link to="/blog">
                    <li className="text-center text-xl py-1 hover:border-b-2 hover-border-b-solid hover:border-b-violet-600 hover:text-violet-600">Blog</li>
                </Link>
            </ul>
        </div>
    )
}

export default ListSmallScreen
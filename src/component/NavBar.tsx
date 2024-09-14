import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import CodingProfile from "./CodingProfile.tsx";
import { Link } from "react-router-dom";

type NavBarProps = {
    showList: boolean;
    setShowList: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavBar({ showList, setShowList }: NavBarProps) {

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
        setShowList(!showList)
    }


    return (
        <nav className="flex justify-between items-center bg-blue-100 pb-1">
            <span>
                <h1 className="text-violet-600 text-2xl font-medium">Sonu Mondal</h1>
                <h3 className="text-sm">Final year CSE under grad</h3>
            </span>
            {
                !showList ?
                    <div className=" border-2 border-violet-300 border-solid rounded-md px-1 py-1 h-8 w-8 flex justify-center items-center hover:cursor-pointer md:hidden">
                        <RxHamburgerMenu onClick={(e) => {
                            e.stopPropagation()
                            setShowList(!showList)
                        }} className="text-violet-600 font-medium text-4xl" />
                    </div>
                    :
                    <div className=" border-2 border-violet-300 border-solid rounded-md px-1 py-1 h-8 w-8 flex justify-center items-center hover:cursor-pointer md:hidden">
                        <RxCross1 onClick={(e) => {
                            e.stopPropagation()
                            setShowList(!showList)
                        }} className="text-violet-600 font-medium text-4xl" />
                    </div>
            }
            <ul className="hidden relative right-12 md:flex gap-x-6">
                <li onClick={(e) => handleScroll("skill", e)} className="font-medium hover:cursor-pointer  hover:underline hover:text-violet-600">Skills</li>
                <li onClick={(e) => handleScroll("project", e)} className="font-medium hover:cursor-pointer hover:underline hover:text-violet-600">Projects</li>
                <li onClick={(e) => handleScroll("education", e)} className="font-medium hover:cursor-pointer hover:underline hover:text-violet-600">Education</li>
                <CodingProfile />
                <Link to="/blog">
                    <li className="font-medium hover:cursor-pointer hover:underline hover:text-violet-600">Blog</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar
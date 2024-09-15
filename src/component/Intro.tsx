
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoIosArrowRoundDown } from "react-icons/io";

function Intro() {
    return (
        <div className="flex flex-col justify-center items-center mt-10" id="intro">
            <div
                className="flex flex-col justify-center items-center md:flex-row-reverse gap-y-4 md:gap-x-20 lg:gap-x-32"
            >
                <img
                    className="rounded-full w-44 md:w-52 lg:w-72"
                    src="pp.jpg"
                    alt="Profile Photo"
                />
                <div className="text-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl">
                    Hello 👋, i’m
                    <div
                        className="text-2xl sm:text-3xl font-medium text-violet-600 lg:text-4xl"
                    >
                        Sonu Mondal
                    </div>
                    A Full Stack Web developer | Exploring Machine Learning
                </div>
            </div>
            <div
                className="md:w-2/3 lg:w-2/3 w-5/6 sm:w-4/6 text-gray-800 font-medium mt-4"
            >
                <div>
                    As a full stack web developer, I excel in crafting dynamic web
                    applications with MongoDB, PostgreSQL, Express.js, React.js, Node.js
                    and Next.js. With expertise in both front and back end development.
                </div>
                <div className="mt-2">
                    I deliver seamless user experiences while leveraging cutting-edge
                    technologies. Passionate about innovation and quality, I strive to
                    create high-impact solutions that meet business needs and exceed user
                    expectations.
                </div>
            </div>
            <div
                className="flex justify-center items-center gap-x-6 mt-14 md:gap-x-10 lg:gap-x-16"
            >
                <div
                    className="text-4xl sm:text-5xl lg:text-6xl rounded-full text-blue-900"
                >
                    <a target="_blank" href="https://github.com/sonu2027"
                    ><FaGithubSquare /></a>
                </div>
                <div
                    className="text-4xl sm:text-5xl lg:text-6xl rounded-full text-blue-900"
                >
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/sonu-mondal-2380981a7/"
                    ><FaLinkedin /></a>
                </div>

                <div
                    className="text-4xl sm:text-5xl lg:text-6xl rounded-full text-blue-900"
                >
                    <a target="_blank" href="https://www.instagram.com/so__nu2027/"
                    ><FaInstagramSquare /></a>
                </div>

                <div
                    className="text-4xl sm:text-5xl lg:text-6xl rounded-full text-blue-900"
                >
                    <a target="_blank" href="https://twitter.com/So_nu2027"
                    ><FaSquareTwitter /></a>
                </div>
            </div>
            <div className="pt-16">
                <a href="resume.pdf" target="_blank">
                    <button className="bg-violet-800 text-white md:px-5 px-3 py-1 md:py-2 rounded-sm flex justify-center items-center">
                        <span className="text-lg md:text-xl font-medium">Resume</span>
                        <IoIosArrowRoundDown className="text-3xl md:text-4xl" />
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Intro
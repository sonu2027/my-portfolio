type props = {
  names: String;
  description: string;
  techUsed: String,
  githubLink: String,
  liveLink: String,
  assest: String
}

import { FaGithub } from "react-icons/fa";
import { FaGlobeAsia } from "react-icons/fa";

function Project({ names, description, techUsed, githubLink, liveLink, assest }: props) {
  return (

    <div
      className="bg-slate-900 border-2 border-solid border-gray-400 shadow-2xl shadow-slate-900 rounded-xl mt-6"
    >
      <div className="text-center text-xl font-medium text-yellow-500 mt-2">
        {names}
      </div>

      <div className="mt-2 text-gray-300 font-medium px-4 text-sm">
        {description}
      </div>

      <div className="mt-3 px-4">
        <div className="text-lg text-yellow-500">Technology used</div>
        <div className="text-gray-300 font-medium text-sm">
          {techUsed}
        </div>
      </div>

      <div className="flex justify-between items-center gap-x-4 mt-2 px-4">
        <div className="flex justify-center items-center gap-x-2">
          <div className="text-base text-white">GitHub:</div>
          <div className="text-2xl md:text-3xl rounded-full text-violet-600">
            <a target="_blank" href={`${githubLink}`}
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-2">
          <div className="text-base text-white">Live link:</div>
          <div className="text-xl md:text-2xl rounded-full text-violet-600">
            <a target="_blank" href={`${liveLink}`}
            >
              <FaGlobeAsia />
            </a>
          </div>
        </div>
      </div>
      {
        assest == "imageGallery" ? <div style={{ position: "relative", paddingBottom: "56.22254758418741%", height: "0" }}><iframe src="https://www.loom.com/embed/9a8b02ef9d834f73b23ceb1e715eb96a?sid=34b9440b-8028-4190-8a57-bc9ab2125126" style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}></iframe></div>
          :
          <img
            className="rounded-b-xl mt-3"
            src={`${assest}`}
            alt={`${names}`}
          />
      }
    </div>
  )
}

export default Project

{/* <div style="position: relative; padding-bottom: 56.22254758418741%; height: 0;"><iframe src="https://www.loom.com/embed/9a8b02ef9d834f73b23ceb1e715eb96a?sid=9a60434d-e798-4c6a-ada9-4b73d416ecad" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div> */ }
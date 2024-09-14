import { FaCalendarAlt } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 2xl:grid-cols-3 mx-4 sm:mx-8 md:mx-12 lg:mx-20 mb-10 education"
    >
      <div
        className="bg-violet-600 border-2 border-solid border-gray-300 shadow-2xl shadow-slate-300 py-4 px-2 rounded-md mt-6"
      >
        <div className="flex justify-start items-center gap-x-2">
          <div className="text-yellow-400 text-2xl font-medium">
            <FaCalendarAlt />
          </div>
          <div className="text-2xl text-white font-medium">2021-2025</div>
        </div>
        <div className="mt-2 flex justify-start items-center gap-x-2">
          <div><FaGraduationCap /></div>
          <div className="text-gray-200 font-medium">
            --B.tech, Computer Science and Engineering
          </div>
        </div>
        <div className="mt-2 flex justify-start items-center gap-x-2">
          <div><FaUniversity /></div>
          <div className="text-gray-200 font-medium">
            Narula Institute of Technology, Kolkata
          </div>
        </div>
        <div className="mt-2 flex justify-start items-center gap-x-2">
          <div className="text-white text-2xl">--</div>
          <div className="text-gray-200 font-medium">CGPA: 7.7</div>
        </div>
      </div>
    </div>
  )
}

export default Education
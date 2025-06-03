import { FaCalendarAlt, FaUniversity, FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 2xl:grid-cols-3 mx-4 sm:mx-8 md:mx-12 lg:mx-20 mb-10 education">
      <div
        className="bg-gradient-to-r from-violet-600 to-purple-700 border-2 border-gray-300 shadow-2xl shadow-slate-300 py-6 px-4 rounded-lg mt-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        <div className="flex justify-start items-center gap-x-2">
          <div className="text-yellow-400 text-2xl">
            <FaCalendarAlt />
          </div>
          <div className="text-2xl text-white font-semibold">2021-2025</div>
        </div>

        <div className="mt-4 flex justify-start items-center gap-x-2">
          <div className="text-yellow-400 text-xl">
            <FaGraduationCap />
          </div>
          <div className="text-gray-200 font-medium text-lg">
            B.Tech, Computer Science and Engineering
          </div>
        </div>

        <div className="mt-4 flex justify-start items-center gap-x-2">
          <div className="text-yellow-400 text-xl">
            <FaUniversity />
          </div>
          <div className="text-gray-200 font-medium text-lg">
            Narula Institute of Technology, Kolkata
          </div>
        </div>

        <div className="mt-4 flex justify-start items-center gap-x-2">
          <div className="text-yellow-400 text-xl">--</div>
          <div className="text-gray-200 font-medium text-lg">CGPA: 7.8475</div>
        </div>
      </div>
    </div>
  );
}

export default Education;
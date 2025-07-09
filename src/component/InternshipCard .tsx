import { Briefcase, Clock, Laptop2 } from "lucide-react";

const InternshipCard = () => {
    return (
        <>
            <div id="work-exp"
                className="text-2xl md:text-3xl mt-14 font-medium mx-4 sm:mx-8 md:mx-12 lg:mx-20 skill"
            >
                Work Experience
            </div>
            <div className="max-w-4xl mx-4 sm:mx-8 md:mx-12 lg:mx-20 
      p-6 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 mt-4"
            >
                <div className="flex items-center gap-4 mb-5">
                    <div className="bg-blue-100 p-3 rounded-xl">
                        <Briefcase className="text-blue-600" />
                    </div>
                    <div>
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">Full Stack Developer Intern</h2>
                        <p className="text-gray-500 text-sm">Codetikki (Remote)</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-gray-700 text-sm mb-4">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span><strong>Duration:</strong> Feb – Apr, 2025</span>
                </div>

                <div className="text-gray-700 text-sm leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div className="flex items-center mb-2">
                        <Laptop2 className="w-4 h-4 mr-2 text-blue-500" />
                        <span className="font-semibold text-gray-800">Key Contributions</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1">
                        <li>
                            Worked on the company’s official website, enhancing overall responsiveness and user experience.
                        </li>
                        <li>
                            Developed and integrated <strong>RESTful APIs</strong>, and implemented <strong>MongoDB aggregation pipelines</strong> to handle complex data queries.
                        </li>
                        <li>
                            Collaborated with both frontend and backend teams to ensure seamless performance and effective code optimization.
                        </li>
                    </ul>
                </div>

            </div>
        </>
    );
};

export default InternshipCard;

import { FaTrophy } from "react-icons/fa";

export function Achievement() {
    return (
        <section id="achievement" className="py-12 mx-4 sm:mx-8 md:mx-12 lg:mx-20 mt-20">
            <div className="container px-4">
                <h2 className="text-3xl font-bold mb-12 text-gray-800">
                    <FaTrophy className="inline mr-2 text-yellow-500" />
                    Coding Achievements
                </h2>

                <div className="max-w-3xl bg-blue-100 rounded-xl shadow-md overflow-hidden p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-3/5 md:w-1/4 flex justify-center mb-4 md:mb-0">
                            <img
                                src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg"
                                alt="LeetCode Logo"
                                className="h-16 w-auto"
                            />
                        </div>
                        <div className="md:w-3/4 md:pl-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                50+ Day Problem-Solving Streak
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Achieved in 2023 | Ranked among top 6.9% of LeetCode coders
                            </p>
                            <a
                                href="https://leetcode.com/medal/?showImg=0&id=2805589&isLevel=false"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                            >
                                View Achievement
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
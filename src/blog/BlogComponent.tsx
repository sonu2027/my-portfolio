type props = {
    title: string,
    about: string,
    date: number,
    sup: string,
    month: string,
    year: number,
    route: string
}

import { Link } from "react-router-dom"

function BlogComponent({ title, about, date, sup, month, year, route }: props) {
    return (
        <div className="px-2 pt-3 pb-1 sm:pt-7 sm:pb-4 bg-white sm:w-11/12 md:w-10/12 lg:w-50rem rounded-md shadow-sm shadow-gray-400 sm:px-4">
            <Link to={`/blog/${route}?title=${title}&date=${date}&month=${month}&year=${year}&sup=${sup}`}><h1 className="text-lg md:text-3xl font-medium">{title}</h1></Link>
            <p className="mt-1 text-xs xs:text-base md:text-lg">{about}</p>
            <div className="flex justify-between items-center mt-4">
                <Link to={`/blog/${route}?title=${title}&date=${date}&month=${month}&year=${year}&sup=${sup}`}><button className="px-3 py-2 bg-violet-600 text-white rounded-md text-xs xs:text-base md:text-xl">Read more</button></Link>
                <div className="flex justify-center items-center gap-x-1">
                    <Link to="/"><img className="h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-full border-1 border-solid border-gray-300" src="./pp.jpg" alt="image" /></Link>
                    <Link to="/"><p className="text-xs xs:text-base">Sonu Mondal</p></Link>
                    <div className="flex justify-center items-center gap-x-1 pl-2">
                        <p className="h-1 w-1 rounded-full bg-gray-600 font-medium"></p>
                        <p className="text-gray-600 text-xs xs:text-base">{date}<sup>{sup}</sup> {month} {year}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogComponent
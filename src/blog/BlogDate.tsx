type props = {
    date: number,
    sup: string,
    month: string,
    year: number
}

import { Link } from "react-router-dom"

function BlogDate({ date, sup, month, year }: props) {
    return (
        <div className="flex justify-center items-center gap-x-1">
            <Link to="/"><img className="h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-full border-1 border-solid border-gray-300" src="pp.jpg" alt="image" /></Link>
            <Link to="/"><p className="text-xs xs:text-base">Sonu Mondal</p></Link>
            <div className="flex justify-center items-center gap-x-1 pl-2">
                <p className="h-1 w-1 rounded-full bg-gray-600 font-medium"></p>
                <p className="text-gray-600 text-xs xs:text-base">{date}<sup>{sup}</sup> {month} {year}</p>
            </div>
        </div>
    )
}

export default BlogDate
import { Link } from "react-router-dom"

function ListSmallScreen2() {

    return (
        <div onClick={(e) => e.stopPropagation()} className="flex justify-center items-center bg-blue-50 shadow-gray-300 shadow-md md:hidden sticky top-14 z-10">
            <ul className="py-2">
                <Link to="/blog">
                    <li className="text-center text-xl py-1 hover:border-b-2 hover-border-b-solid hover:border-b-violet-600 hover:text-violet-600">Blog</li>
                </Link>
                <li className="text-center hover:cursor-pointer text-xl py-1 hover:border-b-2 hover-border-b-solid hover:border-b-violet-600 hover:text-violet-600">Store</li>
            </ul>
        </div>
    )
}

export default ListSmallScreen2
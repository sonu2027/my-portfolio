import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

type NavBarProps = {
    showList: boolean;
    setShowList: React.Dispatch<React.SetStateAction<boolean>>;
    heading3: string
};

function NavBar2({ showList, setShowList, heading3 }: NavBarProps) {

    return (
        <nav className="flex justify-between items-center bg-blue-100 pb-1">
            <span>
                <Link to="/">
                    <h1 className="text-violet-600 text-2xl font-medium">Sonu Mondal</h1>
                </Link>
                <h3 className="text-sm">{heading3}</h3>
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
                <Link to="/blog">
                    <li className="font-medium hover:cursor-pointer hover:underline hover:text-violet-600">Blog</li>
                </Link>
                <li className="font-medium hover:cursor-pointer hover:underline hover:text-violet-600">Store</li>
            </ul>
        </nav>
    )
}

export default NavBar2
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

type props = {
    showCodingProfile: boolean;
    setShowCodingProfile: React.Dispatch<React.SetStateAction<boolean>>;

}

function CodingProfileHeading({ showCodingProfile, setShowCodingProfile }: props) {

    return (
        <>
            <div className="font-medium">Coding Profile</div>
            {
                showCodingProfile ?
                    <IoMdArrowDropdown  onClick={(e) => {
                        e.stopPropagation()
                        setShowCodingProfile(!showCodingProfile)
                    }} className="mt-1 hover:cursor-pointer" />
                    :
                    <IoMdArrowDropup  onClick={(e) => {
                        e.stopPropagation()
                        setShowCodingProfile(!showCodingProfile)
                    }} className="mt-1 hover:cursor-pointer" />
            }
        </>
    )
}

export default CodingProfileHeading
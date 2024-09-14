import { useState } from "react";
import CodingProfileHeading from "./CodingProfileHeading.tsx";
import ListItem from "./ListItem.tsx";

function CodingProfile() {

    const ULstyle: string = "border-1 border-solid border-b-gray-300 border-l-gray-300 border-r-gray-300 px-4 py-2 bg-blue-100 border-t-blue-100"

    const [showCodingProfile, setShowCodingProfile] = useState<boolean>(false)

    return (
        <>
            <li className="flex">
                <CodingProfileHeading showCodingProfile={showCodingProfile} setShowCodingProfile={setShowCodingProfile} />
                {
                    showCodingProfile &&
                    <div className="fixed top-10">
                        <ListItem ULstyle={ULstyle} />
                    </div>
                }
            </li>
        </>
    )
}

export default CodingProfile
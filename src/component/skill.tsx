type prop = {
    names: string;
    location: string;
}

function Skill({ names, location }: prop) {
    return (
        <div
            className="flex justify-center items-center flex-col text-2xl font-medium rounded-md p-2 bg-violet-600 text-white"
        >
            <img
                className="h-16 w-16 md:h-20 md:w-20"
                src={`${location}`}
                alt="Image"
            />
            <p>{names}</p>
        </div>
    )
}

export default Skill
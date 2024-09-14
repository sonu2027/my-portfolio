import Skill from "./skill.tsx"
import { useSkillAsset } from "../customHooks/useSkillAsset.ts"

function Skills() {

    const skills: { [key: string]: string } = useSkillAsset()

    return (
        <>
            <div id="skill"
                className="text-2xl md:text-3xl mt-14 font-medium mx-4 sm:mx-8 md:mx-12 lg:mx-20 skill"
            >
                Languages and Frameworks
            </div>

            <div
                className="bg-white grid grid-cols-2 gap-y-4 gap-x-3 p-2 rounded-md mt-4 mx-4 border-2 border-solid border-gray-300 shadow-2xl shadow-slate-500 sm:grid-cols-3 sm:mx-8 md:grid-cols-4 md:mx-12 lg:grid-cols-5 lg:mx-20 myskills"
                id="skill"
                data-aos="fade-up"
            >
                {
                    Object.keys(skills).map((e)=><Skill key={e} names={e} location={skills[e]}/>)
                }
            </div>
        </>
    )
}

export default Skills
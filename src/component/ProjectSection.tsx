import { useProject } from "../customHooks/useProject.ts"
import Project from "./Project.tsx"

function ProjectSection() {

  const project = useProject()

  return (
    <>
      <div id="project"
        className="text-2xl md:text-3xl mt-14 font-medium mx-4 sm:mx-8 md:mx-12 lg:mx-20 skill"
      >
        Projects
      </div>
      <div
        className="grid gap-y-8 grid-cols-1 sm:grid-cols-2 md:gap-x-4 bmd:grid-cols-3 mx-4 sm:mx-8 md:mx-12 lg:mx-20 projects"
      >

        {
          project.map((e) => <Project key={e.description} names={e.names} description={e.description} techUsed={e.techUsed} githubLink={e.githubLink} liveLink={e.liveLink} assest={e.assest} />)
        }
      </div>
    </>
  )
}

export default ProjectSection
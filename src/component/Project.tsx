import { FaGithub, FaGlobeAsia } from "react-icons/fa";

type Props = {
  names: string; 
  description: string; 
  techUsed: string; 
  githubLink: string;
  liveLink: string; 
  assest: string; 
};

function Project({ names, description, techUsed, githubLink, liveLink, assest }: Props) {
  return (
    <div className="bg-slate-900 border-2 border-gray-700 rounded-xl overflow-hidden shadow-2xl shadow-slate-900 hover:shadow-violet-600 transition-all duration-300 ease-in-out transform hover:-translate-y-2">
      {assest === "imageGallery" ? (
        <video className="w-full h-48 sm:h-56 md:h-72 object-cover" controls>
          <source src="photo_gallery.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          className="w-full h-48 sm:h-56 md:h-72 object-cover"
          src={assest}
          alt={names}
        />
      )}

      <div className="p-6">
        <h2 className="text-2xl font-bold text-yellow-500 mb-2">{names}</h2>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-yellow-500 mb-1">Technologies Used</h3>
          <p className="text-gray-400 text-sm">{techUsed}</p>
        </div>
        <div className="flex justify-between items-center">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-violet-600 transition-colors duration-300"
          >
            <FaGithub className="text-2xl" />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-violet-600 transition-colors duration-300"
          >
            <FaGlobeAsia className="text-2xl" />
            <span className="text-sm">Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;




{/* <div style="position: relative; padding-bottom: 56.22254758418741%; height: 0;"><iframe src="https://www.loom.com/embed/9a8b02ef9d834f73b23ceb1e715eb96a?sid=9a60434d-e798-4c6a-ada9-4b73d416ecad" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div> */ }
import zomatoImg from "../assets/project/zomato-clone.png"
import todoImg from "../assets/project/todo-kart.png"

type project = {
    names: String;
    description: string;
    techUsed: String,
    githubLink: String,
    liveLink: String,
    assest: String
}
const useProject = (): project[] => {
    const project: project[] = [
        {
            names: "Zomato Clone",
            description: "Presenting a React JS-powered Zomato clone, crafted with CSS and backed by Node.js, Express.js, and MongoDB. Experience the convenience of browsing, ordering, and reviewing restaurants, all in a familiar and user-friendly interface.",
            techUsed: "React.js | CSS | Node.js | MongoDB | Express.js",
            githubLink: "https://github.com/sonu2027/Zomato-Clone",
            liveLink: "https://zonatoclone.vercel.app/",
            assest: zomatoImg
        },
        {
            names: "Image Gallery",
            description: "Image gallery platform, featuring seamless signup/login with email verification. Users can upload, manage, and customize their images and profile details with ease. Enjoy complete CRUD functionality for enhanced control over your content.",
            techUsed: "React.js | Tailwind CSS | MongoDB | Node.js | Express.js",
            githubLink: "https://github.com/sonu2027/Photo-Gallery",
            liveLink: "https://photogallerywebapp.vercel.app/",
            assest: "imageGallery"
        },
        {
            names: "Todo",
            description: "Todo web app, built with ReactJS and TailwindCSS, powered by Appwrite database. Seamlessly sign up, log in, and manage tasks. Easily add, delete, and mark tasks as completed",
            techUsed: "React.js | Tailwind CSS | Appwrite",
            githubLink: "https://github.com/sonu2027/todo-appwrite-backend",
            liveLink: "https://todokart.vercel.app/",
            assest: todoImg
        }
    ]

    return project
}

export { useProject }
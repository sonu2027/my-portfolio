import zomatoImg from "../assets/project/zomato-clone.png"
import rapidImg from "../assets/project/rapid-quizzer.png"
import pfm from "../assets/project/pfm.png"

type project = {
    names: string;
    description: string;
    techUsed: string,
    githubLink: string,
    liveLink: string,
    assest: string
}
const useProject = (): project[] => {
    const project: project[] = [
        {
            names: "Personal Financial Manager",
            description: "The Personal Finance Manager is a smart and intuitive app designed to help users track expenses, manage income, set budgets, and achieve savings goals effortlessly. With real-time analytics, customizable categories, and automated reminders, it provides clear financial insights to promote better money management. Secure and user-friendly, this app empowers users to stay in control of their finances and make informed financial decisions.",
            techUsed: "React.js | Express.js | Node.js | Tailwind CSS | MongoDB",
            githubLink: "https://github.com/sonu2027/personal-finance-manager",
            liveLink: "https://managepersonalfinance.vercel.app",
            assest: pfm
        },
        {
            names: "Rapid-Quizzer",
            description: "Built a real-time multiplayer quiz platform where players compete by answering timed questions, with scores based on accuracy and speed. Developed a result system to display scores and declare the winner, rewarding the most accurate and fastest player.",
            techUsed: "React.js | Express.js | Node.js | Tailwind CSS | MongoDB",
            githubLink: "https://github.com/sonu2027/Rapid-Quizzer",
            liveLink: "https://playquizes.vercel.app/",
            assest: rapidImg
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
            names: "Food king",
            description: "Presenting a React JS-powered Food King, crafted with CSS and backend by Node.js, Express.js, and MongoDB. Experience the convenience of browsing, ordering, and reviewing restaurants, all in a familiar and user-friendly interface.",
            techUsed: "React.js | CSS | Node.js | MongoDB | Express.js",
            githubLink: "https://github.com/sonu2027/Zomato-Clone",
            liveLink: "https://foodkings.vercel.app/",
            assest: zomatoImg
        },
    ]

    return project
}

export { useProject }
import c from "../assets/skills/c.png"
import cpp from "../assets/skills/cpp.png"
import js from "../assets/skills/jslogo.png"
import ts from "../assets/skills/ts.png"
import html from "../assets/skills/html.webp"
import css from "../assets/skills/css.png"
import tailwind from "../assets/skills/tailwindcss.svg"
import react from "../assets/skills/react.webp"
import node from "../assets/skills/nodejs.png"
import express from "../assets/skills/express.png"
import next from "../assets/skills/next.svg"
import mongodb from "../assets/skills/mongoDB.png"
import mysql from "../assets/skills/mySql.png"
import postgresql from "../assets/skills/postgresql.png"
import appwrite from "../assets/skills/appwrite.svg"
import python from "../assets/skills/python.png"

const useSkillAsset = () => {

    const obj: { [key: string]: string } = {
        "C": c,
        "C++": cpp,
        "JavaScript": js,
        "TypeScript": ts,
        "Python":python,
        "HTML": html,
        "CSS": css,
        "Tailwind": tailwind,
        "React.js": react,
        "Node.js": node,
        "Express.js": express,
        "Next.js": next,
        "MongoDB": mongodb,
        "PostgreSQL": postgresql,
        "MySQL": mysql,
        "Appwrite":appwrite
    }

    return obj

}

export { useSkillAsset }
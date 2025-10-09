import './styles.css';

import { FaGitAlt } from "react-icons/fa";
import { SiCss3, SiDocker, SiGit, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiSqlite, SiTailwindcss, SiTypescript } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";

const delayDescktop = 7.334; // 120 segundos / 16 iconos

const icons = [
    {
        icon: <SiJavascript size={46} color="
#F7DF1E" />, name: "JavaScript"
    },
    {
        icon: <SiTypescript size={46} color="
#3178C6" />, name: "TypeScript"
    },
    {
        icon: <SiReact size={46} color="
#61DAFB" />, name: "React"
    },
    {
        icon: <SiNextdotjs size={46} color="
#000000" />, name: "Next.js"
    },
    {
        icon: <SiTailwindcss size={46} color="
#38BDF8" />, name: "Tailwind CSS"
    },
    {
        icon: <SiNodedotjs size={46} color="
#339933" />, name: "Node.js"
    },
    {
        icon: <SiPython size={46} color="
#3776AB" />, name: "Python"
    },
    {
        icon: <SiDocker size={46} color="
#4696ED" />, name: "Docker"
    },
    {
        icon: <SiGit size={46} color="
#F05032" />, name: "Git"
    },
    {
        icon: <SiHtml5 size={46} color="
#E34F26" />, name: "HTML5"
    },
    {
        icon: <SiCss3 size={46} color="
#1572B6" />, name: "CSS3"
    },
    {
        icon: <SiSqlite size={46} color="
#003B57" />, name: "SQLite"
    },
    {
        icon: <IoLogoGithub size={46} color="
#38BDF8" />, name: "GitHub"
    },
    {
        icon: <SiMongodb size={46} color="
#47A468" />, name: "MongoDB"
    },
    {
        icon: <FaGitAlt size={46} color="
#F05032" />, name: "Git"
    },
];

export default function FloatingIcons() {


    return (

        <div className="hidden top-0  -left-20 w-full  h-full lg:flex lg:flex-wrap absolute overflow-y-auto">
            {icons.map((item, index) => (
                <div
                    key={index}
                    className="snake-icon flex flex-col items-center text-white text-xs gap-2  "
                    style={{
                        animationDelay: `${index * delayDescktop}s`,
                    }}
                >
                    <div className=" backdrop-blur-sm p-3 rounded-lg shadow-lg hover:scale-110 transition-transform">
                        {item.icon}
                    </div>
                </div>
            ))}
        </div>
    );
}
import { useParams } from "react-router-dom";
import MyTreeProject from "./myTree";


export default function ProjectDescription() {
    const { name } = useParams();

    return (
        <div className="flex flex-col w-[84vw] md:w-full">
            <MyTreeProject />
        </div>
    );
}
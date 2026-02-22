import MyTreeProject from "./myTree";
import { useParams } from "react-router";
import SpendiaryProject from "./spendiary";


export default function ProjectDescription() {
    const params = useParams();

    switch (params.name) {
        case "my-tree":
            return <MyTreeProject />;
        case "spendiary":
            return <SpendiaryProject />;
        default:
            return <div>Proyecto no encontrado</div>;
    }

}
import CenterNode from "./CenterNode";
import React from "react";

const defXPos = 338;
const defYPos = 610;
const centerPointX = defXPos + 16
const centerPointY = defYPos + 16

const cn = <CenterNode topSize={defXPos} leftSize={defYPos}/>

const ProjectNodes = ({ allSubNodes }) => {

    return (
        <div>
            {cn}
            {allSubNodes.map((node) => (node))}
        </div>
    )
}

export default ProjectNodes;
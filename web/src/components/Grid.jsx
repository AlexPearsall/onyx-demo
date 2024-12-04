import React from 'react';
import CenterNode from './CenterNode';
import NodeSub from "./NodeSub";
import centerNode from "./CenterNode";

const defXPos = 338;
const defYPos = 610;
const centerPointX = defXPos + 16
const centerPointY = defYPos + 16


function Grid() {

    const cn = <CenterNode topSize={defXPos} leftSize={defYPos}/>

    return (
        <div className="grid-container">
            {[...Array(289)].map((_, index) =>
                <div className="grid-item" key={index}></div>
            )}
            <div className={"project-nodes"}>
                {cn}
                <NodeSub id= {1} topSize={centerPointX + 150} leftSize={centerPointY}/>
                <NodeSub id= {11} topSize={centerPointX + 300} leftSize={centerPointY}/>
            </div>


        </div>
    );
}

export default Grid;
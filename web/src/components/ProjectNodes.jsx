import React from "react";
import Node from "./Node";

const ProjectNodes = ({ allSubNodes, onNodeClick, selectedNode }) => {

    return (
        <div>
            {allSubNodes.map(node => (
                <Node
                    key={node.id}
                    id={node.id}
                    top={node.top}
                    left={node.left}
                    type={node.type}
                    onClick={() => onNodeClick(node.id)}
                    isSelected={selectedNode?.id === node.id}
                />
            ))}
        </div>
    )
}

export default ProjectNodes;
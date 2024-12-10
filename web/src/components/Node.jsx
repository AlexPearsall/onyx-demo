import React from 'react';

/**
 * Represents a node on the project board
 * @param top Represents how far the node is from the top of the project board (ex: 100px from the top)
 * @param left Represents how far the node is from the left of the project board (ex: 100px from the left)
 * @param type Represents the type of node (Text, File, Central Node)
 * @param onClick Once yje node is clicked, a function is called (mostly a selected node function `handleNodeClick` in logic.js)
 * @param isSelected Boolean that represents if the node is selected
 * @returns {Element} A fully functional node to display on the project board
 */
function Node({ top, left, type, onClick, isSelected }) {
    return (
        <div
            className={`node ${isSelected ? "node-selected" : ""}`}
            style={{ top, left, position: 'absolute', cursor: 'pointer' }}
            onClick={onClick}
        >
            {type}
        </div>
    );
}

export default Node;
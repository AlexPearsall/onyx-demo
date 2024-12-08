import React from 'react';


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
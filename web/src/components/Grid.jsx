import React from 'react';
import CenterNode from './CenterNode';

function Grid() {
    return (
        <div className="grid-container">
            {[...Array(289)].map((_, index) =>

                // when we reach an index of 76, add a center node to the grid
                // else add a regular grid item
                index === 76 ? ((<CenterNode topSize={338} leftSize={610}/>)
                ) : (
                    <div className="grid-item" key={index}></div>
                ))}
        </div>
    );
}

export default Grid;
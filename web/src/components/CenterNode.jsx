import React from 'react';


const CenterNode = ({ topSize, leftSize }) => {

    const getX = () => {
        return leftSize;
    }

    const getY = () => {
        return topSize;
    }

    return (
        <div className="node" style={{ top: topSize, left: leftSize }}>

        </div>
    );

}

export default CenterNode;

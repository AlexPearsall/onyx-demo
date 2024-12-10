import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../App';

function Node({ top, left, type, onClick, isSelected, ring, place, parent, id, childCount = 0 }) {
    const [data, setData] = useState({ top, left, childCount }); // Initialize state with props
    const [map, setMap] = useContext(Context);

    

    useEffect(() => {
        // Create a new map to avoid mutating the old map
        const nMap = new Map(map);
        nMap.set(id, [data.top, data.left, data.childCount]);
        //console.log(nMap)
        setMap(nMap); // Update the context with the new map

        
    },[]); // Depend on `data` for updates
    
    useEffect(() => {
        const nMap = new Map(map)
        
        if(nMap.has(id)){
            const data = nMap.get(id)
            console.log(data)
            setData({ top: data[0], left: data[1], childCount: data[2] }); // Access by index
            
        }


    },[map])



    return (
        <div
            className={`node ${isSelected ? "node-selected" : ""}`}
            style={{ top: data.top, left: data.left, position: 'absolute', cursor: 'pointer' }}
            onClick={onClick}
        >
            {type}
        </div>
    );
}

export default Node;

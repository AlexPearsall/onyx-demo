import React, { useState } from "react";
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Grid from './components/Grid';
import './App.css';
import NodeSub from "./components/NodeSub";
import ProjectNodes from "./components/ProjectNodes";


function App() {

    const [nodes, setNodes] = useState([]);

    function addNode() {
        //TODO Edit the topSize and leftSize to change when adding a node
        const newNode = <NodeSub key={"subnode-" + nodes.length} topSize={25 * nodes.length} leftSize={25 * nodes.length}/>
        setNodes((allNodes) => [...allNodes, newNode]);
    }

    return (
        <div className="app">
            <Sidebar addNode={addNode}/>
            <div className="main">
                <Header/>
                <div className="content">
                    <Grid/>
                    <ProjectNodes allSubNodes={nodes}/>
                </div>
            </div>
        </div>
);
}

export default App;

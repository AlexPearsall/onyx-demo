import React, { useState } from "react";
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Grid from './components/Grid';
import './App.css';
import NodeSub from "./components/NodeSub";
import ProjectNodes from "./components/ProjectNodes";


function App() {

    const [nodes, setNodes] = useState([]);

    function addNode(topSize, leftSize) {
        const newNode = <NodeSub key={"subnode-" + nodes.length} topSize={topSize} leftSize={leftSize}/>
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

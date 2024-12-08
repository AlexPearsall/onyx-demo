import React, { useState, useEffect } from "react";
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import Grid from './components/Grid.jsx';
import ProjectNodes from "./components/ProjectNodes.jsx";
import { initDB, getAllNodes, getAllLinks } from './model/database.js';
import { handleAddNode, handleNodeClick, handleReset } from './controller/logic.js';
import './App.css';

function App() {
    const [errorMessage, setErrorMessage] = useState(""); 
    const [state, setState] = useState({
        nodes: [],
        links: [],
        selectedNode: null,
    });

    const updateState = (newState) => setState(prev => ({ ...prev, ...newState }));

    useEffect(() => {
        // Initialize IndexedDB and fetch initial data
        const initialize = async () => {
            await initDB();
            const nodes = await getAllNodes();
            const links = await getAllLinks();
            setState({ nodes, links, selectedNode: null });
        };
        initialize();
    }, []);

    return (
        <div className="app">
            <Sidebar
                addNode={(type, top, left) =>
                    handleAddNode(type, top, left, state.selectedNode, updateState, setErrorMessage)
                }
                resetProject={() => handleReset(updateState)}
                selectedNode={state.selectedNode}
                setErrorMessage={setErrorMessage}
            />
            <div className="main">
                <Header />
                <div className="content">
                    <div className="connections-container">
                        <svg className="connections">
                            {state.links.map((link, index) => {
                                const fromNode = state.nodes.find(n => n.id === link.from);
                                const toNode = state.nodes.find(n => n.id === link.to);
                                return (
                                    <line
                                        key={index}
                                        x1={fromNode.left + 30}
                                        y1={fromNode.top + 30}
                                        x2={toNode.left + 30}
                                        y2={toNode.top + 30}
                                        stroke="black"
                                    />
                                );
                            })}
                        </svg>
                    </div>
                    {errorMessage && (
                        <div className="error-message">
                            {errorMessage}
                        </div>
                    )}
                    <Grid />
                    <ProjectNodes
                        allSubNodes={state.nodes}
                        onNodeClick={(nodeId) =>
                            handleNodeClick(nodeId, state.selectedNode, updateState)
                        }
                        selectedNode={state.selectedNode}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;

import { addNodeToDB, addLinkToDB, getAllNodes, getAllLinks, resetDatabase, addCentralNode } from '../model/database.js';

export const handleAddNode = async (type, top, left, selectedNode, updateStateCallback, updateErrorMessageCallback) => {
    if (selectedNode) {
        const newNode = {
            id: `node-${Date.now()}`, // ID based on timestamp so it will always be unique
            type: type,
            top,
            left,
        };
        const newLink = { from: selectedNode.id, to: newNode.id };

        // Save to IndexedDB
        await addNodeToDB(newNode);
        await addLinkToDB(newLink);

        // Update state
        const nodes = await getAllNodes();
        const links = await getAllLinks();
        updateStateCallback({ nodes, links, selectedNode: null });
    } else {
        updateErrorMessageCallback("Please select a node.");
        setTimeout(() => {
            updateErrorMessageCallback("");
        }, 1500);
    }
};

export const handleNodeClick = async (nodeId, currentSelectedNode, updateStateCallback) => {
    const nodes = await getAllNodes();
    const selectedNode =
        currentSelectedNode?.id === nodeId ? null : nodes.find(node => node.id === nodeId);

    updateStateCallback({ selectedNode });
};

export const handleReset = async (updateStateCallback) => {
    await resetDatabase();
    await addCentralNode();
    const centralNode = await getAllNodes();
    updateStateCallback({ nodes: centralNode, links: [], selectedNode: null });
};
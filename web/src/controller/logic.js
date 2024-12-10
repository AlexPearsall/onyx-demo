import { addNodeToDB, addLinkToDB, getAllNodes, getAllLinks, resetDatabase, addCentralNode } from '../model/database.js';

/**
 * Adds a node to the project board
 * @param type Represents the type of node (Text, File, Central Node)
 * @param top Represents how far the node is from the top of the project board (ex: 100px from the top)
 * @param left Represents how far the node is from the left of the project board (ex: 100px from the left)
 * @param selectedNode The node that is currently selected
 * @param updateStateCallback Function that updates the state of the project
 * @param updateErrorMessageCallback Defines any errors that have occurred
 */
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

/**
 * Determines what happens when a node is clicked
 * @param nodeId The ID of the node that was clicked
 * @param currentSelectedNode The node that is currently selected
 * @param updateStateCallback Function that updates the state of the node (clicked/un-clicked)
 */
export const handleNodeClick = async (nodeId, currentSelectedNode, updateStateCallback) => {
    const nodes = await getAllNodes();
    const selectedNode =
        currentSelectedNode?.id === nodeId ? null : nodes.find(node => node.id === nodeId);

    updateStateCallback({ selectedNode });
};

/**
 * Resets the project to its initial state
 * @param updateStateCallback The function that updates the state of the project
 */
export const handleReset = async (updateStateCallback) => {
    await resetDatabase();
    await addCentralNode();
    const centralNode = await getAllNodes();
    updateStateCallback({ nodes: centralNode, links: [], selectedNode: null });
};
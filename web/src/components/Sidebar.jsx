import React from 'react';
import { FaPlus, FaRedo, FaFileExport } from 'react-icons/fa';
import SidebarIcon from './SidebarIcon';

function alertNewNode() {
    alert("Button Pressed")
}

function Sidebar({ addNode }) {
    const menuItems = [
        {
            id: 1,
            label: 'New Node',
            icon: <FaPlus size={20} color="#fff"/>,
            bgColor: '#223046',
            // TODO Replace the Random functions with the locations of a sub-node
            onClick: () => addNode(Math.random() * 600, Math.random() * 1000)
        },
        {
            id: 2,
            label: 'Save',
            icon: <FaFileExport size={20} color="#fff"/>,
            bgColor: '#67B1DF',
            onClick: alertNewNode
        },
        { id: 3, label: 'Reset', icon: <FaRedo size={20} color="#fff"/>, bgColor: '#D23F3F', onClick: alertNewNode },
    ];

    return (
        <div className="sidebar">
            <div className="sidebar-header">Edit Menu</div>
            <div className="sidebar-items">
                {menuItems.map((item) => (
                    <SidebarIcon
                        key={item.id}
                        icon={item.icon}
                        label={item.label}
                        bgColor={item.bgColor}
                        onClick={item.onClick}
                    />
                ))}
            </div>
        </div>);
}

export default Sidebar;

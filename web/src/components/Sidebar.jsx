import React from 'react';
import { FaPlus, FaTrash, FaEdit, FaFileExport } from 'react-icons/fa';
import SidebarIcon from './SidebarIcon';

function Sidebar() {
    const menuItems = [
        { id: 1, label: 'New CenterNode', icon: <FaPlus size={20} color="#fff" />, bgColor: '#223046' },
        { id: 2, label: 'Delete CenterNode', icon: <FaTrash size={20} color="#fff" />, bgColor: '#D23F3F' },
        { id: 3, label: 'Edit Branch', icon: <FaEdit size={20} color="#fff" />, bgColor: '#A050C3' },
        { id: 4, label: 'Import/Export', icon: <FaFileExport size={20} color="#fff" />, bgColor: '#67B1DF' },
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
                        onClick={() => alert(`${item.label} clicked!`)} //Sample alert now, handle this later
                    />
                ))}
            </div>
        </div>
    );
}

export default Sidebar;

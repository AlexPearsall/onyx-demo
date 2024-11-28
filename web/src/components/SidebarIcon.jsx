import React from 'react';

function SidebarIcon({ icon, label, bgColor, onClick }) {
    return (
        <div 
            className="sidebar-icon" 
            onClick={onClick}
        >
            <div className="icon-container"  style={{ backgroundColor: bgColor }}>{icon}</div>
            <div className="icon-label">{label}</div>
        </div>
    );
}

export default SidebarIcon;


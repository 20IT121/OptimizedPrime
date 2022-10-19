import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function SidebarItem({ item }) {
    const [open, setOpen] = useState(false);

    if (item.childrens) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    <Link to={item.path} style={{ textDecoration: 'none' }}><span className='span-title'>{item.title}</span></Link>

                    <i className='bi-chevron-down toggle-btn' onClick={() => setOpen(!open)}></i>
                </div>

                <div className="sidebar-content">
                    {item.childrens.map((child, index) => <SidebarItem key={index} item={child} />)}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    <li>
                        <Link to={item.path} style={{ textDecoration: 'none' }}><span className='spancss'>{item.title}</span></Link>
                    </li>
                </div>
            </div>
        )
    }
}
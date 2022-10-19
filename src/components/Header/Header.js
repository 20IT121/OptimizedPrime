import React from 'react'
import './Header.css';

import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <div className="nav">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Optimized Prime</span>
                </Link>
            </div>
        </div>
    )
}

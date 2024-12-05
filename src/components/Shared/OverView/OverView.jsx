import React, { useState } from 'react';
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
import './OverView.css';


const OverView = () => {
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };
    const links = [
        { id: 'overview', text: 'Overview' },
        { id: 'utility', text: 'Utility' },
        { id: 'activities', text: 'Activities' },
        { id: 'training', text: 'Training' },
        { id: 'environment', text: 'Environment' },
        { id: 'career', text: 'Career' },
        { id: 'clients', text: 'Clients' },
        { id: 'csr', text: 'CSR' },
    ];
    return (
        <div className="my-4 d-flex justify-content-center align-items-center">
            <ul className="list-unstyled">
                {links.map((link) => (
                    <li key={link.id} className="my-2 description-text">
                        <a
                            href={`#${link.id}`}
                            className={`nav-link ${link.id === activeLink ? 'active-link' : ''}`}
                            onClick={() => handleLinkClick(link.id)}
                        >
                            {link.text}
                            {link.id === activeLink && <span className="arrow-icon">➜</span>}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OverView;
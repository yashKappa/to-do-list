import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef();

    // Close menu on outside click/touch
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isOpen]);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Sidebar for larger screens */}
            <div className="sidebar bg-dark text-white p-3 d-none d-lg-block" style={{ width: '250px' }}>
  <h4 className="text-center">Task Manager</h4>
  <img 
    src={`${process.env.PUBLIC_URL}/logo 1.png`} 
    className="img-fluid rounded my-3"
    alt="Sidebar logo"
    style={{ maxHeight: '150px', objectFit: 'cover' }} 
  />
  <ul className="nav flex-column mt-4">
    <li className="nav-item mb-2">
      <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`} end>
        Add Task
      </NavLink>
    </li>
    <li className="nav-item mb-2">
      <NavLink to="/task" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`}>
        All Tasks
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/complete" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`}>
        Completed Tasks
      </NavLink>
    </li>
  </ul>
</div>

            {/* Navbar for smaller screens */}
            <nav className="navbar navbar-expand-lg navbar-dark d-lg-none">
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}
                    aria-controls="navbarNav"
                    aria-expanded={isOpen ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                >
                    <span>
                        <i class="fa-solid fa-bars"></i>
                    </span>
                </button>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div
                    ref={menuRef}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '75vw',
                        height: '100vh',
                        backgroundColor: '#343a40',
                        zIndex: 1050,
                        padding: '20px',
                        boxShadow: '2px 0px 10px rgba(0,0,0,0.5)',
                    }}
                >
                    <div className="menu d-flex justify-content-between align-items-center mb-4">
                        <h2 className="text-white">Task Manager</h2>
                        <i className="btn btn-outline-light btn-sm" onClick={() => setIsOpen(false)} class="fa-solid fa-xmark"></i>
                    </div>
                    <img alt='logo' className="img-fluid rounded my-3" src='logo 1.png'/>
                    <ul className="navbar-nav">
                        <li className="nav-item mb-2">
                            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`} end onClick={() => setIsOpen(false)}>
                                Add Task
                            </NavLink>
                        </li>
                        <li className="nav-item mb-2">
                            <NavLink to="/task" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`} onClick={() => setIsOpen(false)}>
                                All Tasks
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/complete" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`} onClick={() => setIsOpen(false)}>
                                Completed Tasks
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Sidebar;

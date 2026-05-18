import { NavLink } from 'react-router-dom'
import "./NavItem.css";

export function NavItem({ icon, label, href, collapsed }) {
    return (
        <NavLink
            className={({ isActive }) =>
                `nav-item ${isActive ? 'nav-item--active' : ''}`
            }
            aria-current={({ isActive }) => isActive ? 'page' : undefined}
            to={href}
        >
        <span className="nav-item__icon" aria-hidden>{icon}</span>
            {!collapsed && (
                <span className="nav-item__label">{label}</span>
            )}
        {/* Tooltip only visible when sidebar is collapsed */}
        {collapsed && (
            <span className="nav-item__tooltip" role="tooltip">{label}</span>
        )}
        </NavLink>
    )
}

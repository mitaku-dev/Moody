export function NavItem({ icon, label, active, collapsed, onClick }) {
    return (
<a
        className={`nav-item ${active ? 'nav-item--active' : ''}`}
    aria-current={active ? 'page' : undefined}
    onClick={e => { e.preventDefault(); onClick() }}
    href="#"
        >
        <span className="nav-item__icon" aria-hidden>{icon}</span>
<span className="nav-item__label">{label}</span>
{/* Tooltip only visible when sidebar is collapsed */}
{collapsed && (
<span className="nav-item__tooltip" role="tooltip">{label}</span>
)}
</a>
)
}

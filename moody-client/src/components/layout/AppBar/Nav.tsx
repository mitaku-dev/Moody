import "./Nav.css"

export function Nav({ links, activeTab, onTabChange }) {
    return (
        <nav className="nav">
            {links.map(link => (
                <a
                key={link.href}
                href={link.href}
                className={`nav-item ${activeTab === link.label ? 'active' : ''}`}
                aria-current={link.active ? 'page' : undefined}
                onClick={e => {
                    onTabChange(link.label)
                }}
                >
                    {link.label}
                </a>
            ))}
        </nav>
    )
}

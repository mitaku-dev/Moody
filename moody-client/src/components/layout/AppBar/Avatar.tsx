import "./Avatar.css";

export function Avatar({ initials, color = 'purple', onClick }) {
    return (
        <button
            className="avatar"
            onClick={onClick}
            aria-label="User menu"
            aria-haspopup="menu"
        >
            <div className={`avatar-inner avatar--${color}`} aria-hidden>
                {initials}
            </div>
        </button>
    )
}

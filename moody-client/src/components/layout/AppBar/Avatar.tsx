import "./Avatar.css";

export function Avatar({ initials, color = 'purple', onClick , size}) {
    return (
        <button
            className={`avatar ${size ? "avatar--" + size : ""}`}
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

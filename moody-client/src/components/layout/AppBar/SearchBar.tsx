import {SearchIcon} from "lucide-react";
import {useState} from "react";
import "./SearchBar.css";

export function SearchBar({ placeholder, shortcut }) {
    const [focused, setFocused] = useState(false)
    const [value, setValue] = useState('')

    return (
        <div className={`search-bar ${focused ? 'focused' : ''}`} role="search">
            <SearchIcon className="search-icon" aria-hidden />
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={e => setValue(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                aria-label={placeholder}
            />
            {!focused && !value && (
                <kbd className="search-kbd" aria-hidden>{shortcut}</kbd>
            )}
        </div>
    )
}

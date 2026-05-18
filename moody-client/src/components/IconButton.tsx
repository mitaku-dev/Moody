import {PlusIcon} from "lucide-react";
import * as React from "react";
import "./IconButton.css";

export default function IconButton({icon,label,onClick}) {
    return (
        <button className="button" aria-label="Create project">
            <PlusIcon aria-hidden />
            <span className="button-label">{label}</span>
        </button>
    );
}

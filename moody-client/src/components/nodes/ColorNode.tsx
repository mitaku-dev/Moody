import { useState, useRef, useEffect } from 'react'
import type {ColorContent, ImageContent} from "@/data/Mood";
import * as React from "react";
import MoodNode from "@/components/nodes/MoodNode";
import "./ColorNode.css"

// Derive accessible contrast color (black or white) from hex
function getContrastColor(hex) {
    if(!hex) return "#ffffff";
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    // Perceived luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? '#111118' : '#ffffff'
}

export function ColorNode({ data, selected }) {
    const colorContent= data.content as ColorContent;
    const { hex, label } = colorContent;
    const [editingLabel, setEditingLabel] = useState(false)
    const [draft, setDraft] = useState(label || '')
    const [copied, setCopied] = useState(false)
    const inputRef = useRef(null)

    useEffect(() => {
        if (editingLabel) inputRef.current?.focus()
    }, [editingLabel]);

    function commitLabel() {
        setEditingLabel(false)
        data.onChange?.({ ...data, label: draft })
    }

    function copyHex() {
        navigator.clipboard.writeText(hex)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    const contrast = getContrastColor(hex);

    return (
        <MoodNode>
        <div className={`node node--color ${selected ? 'node--selected' : ''}`}>

            {/* Color swatch — the main visual */}
            <div
                className="color-node__swatch"
                style={{ background: hex }}
                onClick={copyHex}
                title="Click to copy hex"
            >
        <span className="color-node__hex" style={{ color: contrast }}>
          {copied ? '✓ Copied' : hex?.toUpperCase()}
        </span>
            </div>

            {/* Editable label below */}
            <div className="color-node__footer">
                {editingLabel ? (
                    <input
                        ref={inputRef}
                        className="color-node__label-input"
                        value={draft}
                        onChange={e => setDraft(e.target.value)}
                        onBlur={commitLabel}
                        onKeyDown={e => {
                            if (e.key === 'Enter') commitLabel()
                            if (e.key === 'Escape') { setDraft(label || ''); setEditingLabel(false) }
                            e.stopPropagation()
                        }}
                        placeholder="Label…"
                    />
                ) : (
                    <span
                        className="color-node__label"
                        onDoubleClick={() => setEditingLabel(true)}
                        title="Double-click to label"
                    >
            {label || <span className="node__placeholder">Add label…</span>}
          </span>
                )}

                {/* Native color picker — syncs hex */}
                <label className="color-node__picker-btn" title="Change color">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                        <circle cx="8.5"  cy="7.5"  r=".5" fill="currentColor" />
                        <circle cx="6.5"  cy="12.5" r=".5" fill="currentColor" />
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                    </svg>
                    <input
                        type="color"
                        value={hex}
                        onChange={e => data.onChange?.({ ...data, hex: e.target.value })}
                        className="color-node__color-input"
                    />
                </label>
            </div>
        </div>

        </MoodNode>
    )
}

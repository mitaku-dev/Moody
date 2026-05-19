import { useState, useRef, useEffect } from 'react'
import type {ImageContent, TextContent} from "@/data/Mood";
import MoodNode from "@/components/nodes/MoodNode";
import "./TextNode.css";
import {Avatar} from "@/components/layout/AppBar/Avatar";

export default function TextNode({ data, selected, id }) {
    const txtContent = data.content as TextContent;
    const { body, fontSize, fontFamily, fontWeight, color, align } = txtContent;

    const [editing, setEditing] = useState(false);
    const [draft, setDraft] = useState(body);
    const textareaRef = useRef(null);

    // Focus textarea when entering edit mode
    useEffect(() => {
        if (editing && textareaRef.current) {
            textareaRef.current.focus();
            textareaRef.current.select();
        }
    }, [editing]);

    function commitEdit() {
        setEditing(false);
        //TODO change data
    }

    function handleKeyDown(e) {
        if (e.key === 'Escape') {
            setDraft(body);     // revert
            setEditing(false)
        }
        if (e.key === 'Enter' && e.shiftKey) commitEdit()
        e.stopPropagation()  // prevent ReactFlow from swallowing keys
    }

    const textStyle = {
        fontSize: `${fontSize}px`,
        fontFamily,
        fontWeight,
        color,
        textAlign: align,
    }

    return (
        <MoodNode selected={selected} data={data}>
        <div className={`node node--text ${selected ? 'node--selected' : ''} ${editing ? 'node--editing' : ''}`}>
            {editing ? (
                <textarea
                    ref={textareaRef}
                    className="text-node__textarea"
                    value={draft}
                    onChange={e => setDraft(e.target.value)}
                    onBlur={commitEdit}
                    onKeyDown={handleKeyDown}
                    style={textStyle}
                    rows={4}
                />
            ) : (
                <div
                    className="text-node__body"
                    style={textStyle}
                    onDoubleClick={() => setEditing(true)}
                    title="Double-click to edit"
                >
                    {body || <span className="node__placeholder">Double-click to edit…</span>}
                </div>
            )}

            {editing && (
                <div className="node__edit-hint">Shft↵ save · Esc cancel</div>
            )}


            <div className={"text-node__footer"}>
                <Avatar initials="MJ" color="purple" size="sm"/>
                <span> Editor Name</span>
            </div>

        </div>
        </MoodNode>
    )
}

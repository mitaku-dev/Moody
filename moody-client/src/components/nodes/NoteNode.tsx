import { NodeResizer } from '@xyflow/react';
import MoodNode from "@/components/nodes/MoodNode";
import {ReactNode} from "react";
import type {Mood, NoteContent} from "@/data/Mood";


interface NoteNodeProps {
    data: Mood;
    selected: boolean
}


export default function NoteNode({ data, selected }: NoteNodeProps) {
    const note = data.content as NoteContent;
    return (
        <>
            <NodeResizer isVisible={selected} minWidth={100} minHeight={100} maxWidth={240} maxHeight={240}/>
            <MoodNode selected={selected} data={data}>
                <span>
                    {note.body}
                </span>

            </MoodNode>
        </>
    );
}

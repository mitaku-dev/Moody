import { NodeResizer } from '@xyflow/react';
import Mood from "@/components/Mood";

export function ImageNode({ data, selected }) {
    return (
        <>
            <NodeResizer isVisible={selected} minWidth={100} minHeight={100} maxWidth={240} maxHeight={240}/>
            <Mood selected={selected}>
                <img src={data.src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Mood>
        </>
    );
}

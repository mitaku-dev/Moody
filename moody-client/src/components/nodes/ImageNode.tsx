import { NodeResizer } from '@xyflow/react';
import MoodNode from "@/components/nodes/MoodNode";
import type {ImageContent} from "@/data/Mood";
import "./ImageNode.css";


export function ImageNode({ data, selected }) {
    const imgContent= data.content as ImageContent;
    const { src, alt, fit } = imgContent;
    return (
        <>
            <NodeResizer isVisible={selected} minWidth={100} minHeight={100}/>
            <MoodNode selected={selected} data={data}>
                <div className="image-node__frame">
                    {src ? (
                        <img
                            src={src}
                            alt={alt || ''}
                            className="image-node__img"
                            style={{ objectFit: fit }}
                            draggable={false}
                        />
                    ) : (
                        <div className="image-node__empty">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <path d="m21 15-5-5L5 21" />
                            </svg>
                            <span>Drop image</span>
                        </div>
                    )}

                    {/* Fit badge */}
                    <div className="image-node__badge">{fit}</div>
                </div>
                {alt && <div className="image-node__caption">{alt}</div>}
            </MoodNode>
        </>
    );
}

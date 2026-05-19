import {
    applyEdgeChanges,
    applyNodeChanges,
    Background,
    Controls,
    ReactFlow,
    ReactFlowProvider,
    MiniMap, Panel
} from "@xyflow/react";
import {useCallback, useState} from "react";
import {ImageNode} from "./nodes/ImageNode"
import '@xyflow/react/dist/style.css';
import AppToolbar from "@/components/app-toolbar";
import Dropzone, {useDropzone} from "react-dropzone";
import "./MoodCanvas.css";
import NoteNode from "@/components/nodes/NoteNode";
import type {Mood} from "@/data/Mood";
import TextNode from "@/components/nodes/TextNode";
import {ColorNode} from "@/components/nodes/ColorNode";
import {useDispatch, useSelector} from "react-redux";
import { onNodesChange, onEdgesChange, addNode } from '@/store/canvasSlice';

const nodeTypes = {
    image: ImageNode,
     text: TextNode,
    color: ColorNode,
    note: NoteNode,
   // link: NoteNode,
};


const initialNodes = [
    { id: 'n1', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
    { id: 'n2', position: { x: 0, y: 100 }, data: { label: 'Node 2' } },
];

const initialEdges = [{ id: 'n1-n2', source: 'n1', target: 'n2' }];

export default function MoodCanvas() {
    const nodes = useSelector(state => state.canvas.nodes);
    const edges = useSelector(state => state.canvas.edges);
    const dispatch = useDispatch();


    function createNode(type, srcImage?) {
        console.log(nodes);
       if (type === ""){ return null;}

        const newNode = {
            id:  crypto.randomUUID(),
            type,                          // matches your nodeTypes key
            position: { x: 200, y: 200 }, // or use viewport center
            data: {
                style: {
                  //backgroundColor: "red"
                },
                content: {
                    type: type,
                    src: srcImage,
                }
            }
        };
        dispatch(addNode(newNode));
        console.log(nodes);
    }


    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach(file => {
            // file is a standard File object — do whatever you need here
            const url = URL.createObjectURL(file);
            console.log(file.name, file.type, file.size);
            createNode("image",url)
        });
    });

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    const [selectedMood, setSelectedMood] = useState("");
    return (
        <div  className="canvas" {...getRootProps()}  style={{width: "100%", height: "90vh"}}>
            <AppToolbar
            selectedMood={selectedMood}
            setSelectedMood={setSelectedMood}
            />
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    nodeTypes={nodeTypes}
                    onNodesChange={(changes) => dispatch(onNodesChange(changes))}
                    onEdgesChange={(changes) => dispatch(onEdgesChange(changes))}
                   // onConnect={onConnect}
                    onPaneClick={() => createNode(selectedMood)}
                   // onPaneContextMenu={() => addNode(selectedType)}
                    fitView
                >
                    <Background variant="dots" gap="20" />
                    <Controls />
                    <MiniMap />
                    {isDragActive && (
                        <div className="drop-overlay"></div>
                    )}
                </ReactFlow>
        </div>
    );
}

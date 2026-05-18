import {
    applyEdgeChanges,
    applyNodeChanges,
    addEdge,
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

const nodeTypes = {
    image: ImageNode,
    //text: TextNode,
  //  sticky: StickyNode,
};


const initialNodes = [
    { id: 'n1', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
    { id: 'n2', position: { x: 0, y: 100 }, data: { label: 'Node 2' } },
];

const initialEdges = [{ id: 'n1-n2', source: 'n1', target: 'n2' }];

export default function MoodCanvas() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);


    const onNodesChange = useCallback(
        (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
        [],
    );
    const onConnect = useCallback(
        (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
        [],
    );



    function addNode(type, srcImage) {
        const newNode = {
            id:  crypto.randomUUID(),
            type,                          // matches your nodeTypes key
            position: { x: 200, y: 200 }, // or use viewport center
            data: { src: srcImage },
        };
        setNodes(prev => [...prev, newNode]);
    }


    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach(file => {
            // file is a standard File object — do whatever you need here
            const url = URL.createObjectURL(file);
            console.log(file.name, file.type, file.size);
            addNode("image",url)
        });
    });

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});


    const selectedType = "image";

    return (
        <div  className="canvas" {...getRootProps()}  style={{width: "100%", height: "90vh"}}>
            <AppToolbar/>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    nodeTypes={nodeTypes}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    // onPaneClick={() => addNode(selectedType)}
                    onPaneContextMenu={() => addNode(selectedType)}
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

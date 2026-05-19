import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction} from  '@reduxjs/toolkit';
import {  applyNodeChanges, applyEdgeChanges, addEdge } from '@xyflow/react';
import type { NodeChange, EdgeChange, Node, Edge } from '@xyflow/react/dist/esm/types';

interface CounterState {
    nodes: Node[],
   edges: Edge[]
}

const initialState: CounterState = {
    nodes: [],
    edges: []
};

export const canvasSlice = createSlice({
    name: 'canvas',
    initialState,
    reducers: {
        onNodesChange: (state, action: PayloadAction<NodeChange[]>) => {
            state.nodes = applyNodeChanges(action.payload, state.nodes);
        },
        onEdgesChange: (state, action: PayloadAction<EdgeChange[]>) => {
            state.edges = applyEdgeChanges(action.payload, state.edges);
        },

        setNodes: (state, action: PayloadAction<Node[]>) => {
            state.nodes = action.payload;
        },
        setEdges: (state, action: PayloadAction<Edge[]>) => {
            state.edges = action.payload;
        },
        addNode: (state, action: PayloadAction<Node>) => {
            state.nodes.push(action.payload);
        }
    },
});

export const { onNodesChange, onEdgesChange, setNodes, setEdges, addNode} = canvasSlice.actions;
export default canvasSlice.reducer;

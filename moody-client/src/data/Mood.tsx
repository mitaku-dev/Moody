import MoodItem from "@/data/MoodItem";
import MoodAnnotation from "@/data/MoodAnnotation";

type MoodContentType = 'image' | 'text' | 'color' | 'note' | 'link';

type MoodContent =
    | ImageContent
    | TextContent
    | ColorContent
    | NoteContent
    | LinkContent;

// Per-type content payloads
interface ImageContent {
    type: 'image';
    src: string;
    alt?: string;
    fit: 'cover' | 'contain' | 'fill';
}

interface TextContent {
    type: 'text';
    body: string;
    fontSize: number;
    fontFamily: string;
    fontWeight: 'normal' | 'bold';
    color: string;
    align: 'left' | 'center' | 'right';
}

interface ColorContent {
    type: 'color';
    hex: string;
    label?: string;
}

interface NoteContent {
    type: 'note';
    body: string;
    backgroundColor: string;
}

interface LinkContent {
    type: 'link';
    url: string;
    previewTitle?: string;
    previewImage?: string;
}



// Canvas transform — position, size, rotation
interface Transform {
    x: number;
    y: number;
    width: number;
    height: number;
    rotation: number;
    zIndex: number;
}

interface MoodStyle {
    borderColor?: string;
    borderWidth?: number;
    backgroundColor?: string;
    opacity: number;            // 0–1
    shadow?: boolean;
}

interface Mood {
    id: string;                   // UUID
    createdAt: string;
    updatedAt: string;

    content: MoodContent;

    transform: Transform;
    // Visual style overrides
    style: MoodStyle
    items: MoodItem[]

    tags?: string[];
    label?: string;
    annotations?: MoodAnnotation[];
}

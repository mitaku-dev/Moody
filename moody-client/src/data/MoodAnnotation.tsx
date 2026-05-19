import type {MoodItem} from "@/data/MoodItem";

export interface MoodAnnotation {
    id: string;
    moodId: string;

    name: string;
    items?: MoodItem[];
    tags?: string[];

    createdAt: string;
    updatedAt: string;
}

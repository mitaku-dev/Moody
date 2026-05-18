import MoodItem from "@/data/MoodItem";

export default interface MoodAnnotation {
    id: string;
    moodId: string;

    name: string;
    items?: MoodItem[];
    tags?: string[];

    createdAt: string;
    updatedAt: string;
}

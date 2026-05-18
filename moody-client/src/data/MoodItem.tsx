type MoodItemCategory = 'clothing' | 'prop' | 'equipment' | 'makeup' | 'other';
type MoodItemAction   = 'buy' | 'bring';

export default interface MoodItem {
    id: string;

    label: string;
    action: MoodItemAction;
    category: MoodItemCategory;
    quantity?: number;
    notes?: string;
    price?: string;

    assignedTo?: string;
    done: boolean;
}

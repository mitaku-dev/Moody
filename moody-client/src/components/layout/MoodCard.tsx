import "./MoodCard.css";
import {CheckIcon, PencilIcon, TrashIcon} from "lucide-react";
import "./MoodCard.css"

export function MoodCard({ title, sub, icon, color, selected, collapsed, onSelect, onEdit, onDelete }) {
    return (
        <div
            className={[
                'mood-card',
                selected   && 'mood-card--selected',
                collapsed  && 'mood-card--collapsed',
            ].filter(Boolean).join(' ')}
            onClick={onSelect}
            role="button"
            tabIndex={0}
            aria-pressed={selected}
            onKeyDown={e => e.key === 'Enter' && onSelect?.()}
        >
            <div className={`mood-icon mood-icon--${color}`} aria-hidden>
                {icon}
            </div>

            {!collapsed && (
                <>
                    <div className="mood-text">
                        <div className="mood-title">{title}</div>
                        <div className="mood-sub">{sub}</div>
                    </div>

                    <div className="mood-actions">
                        <button
                            className="mood-action"
                            aria-label={`Edit ${title}`}
                            onClick={e => { e.stopPropagation(); onEdit?.() }}
                        >
                            <PencilIcon />
                        </button>
                        <button
                            className="mood-action mood-action--danger"
                            aria-label={`Delete ${title}`}
                            onClick={e => { e.stopPropagation(); onDelete?.() }}
                        >
                            <TrashIcon />
                        </button>
                    </div>

                    <div className="mood-check" aria-hidden><CheckIcon /></div>
                </>
            )}
        </div>
    )
}

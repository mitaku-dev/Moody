import { useState } from 'react'

export function useActiveTab(initialTab = 'Moodboards') {
    const [activeTab, setActiveTab] = useState(initialTab)
    return { activeTab, setActiveTab }
}

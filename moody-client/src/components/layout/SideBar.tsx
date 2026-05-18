
import "./SideBar.css";
import {DashboardIcon} from "@radix-ui/react-icons";
import {CalendarIcon, ChevronLeftIcon, LayersIcon, SettingsIcon, UsersRoundIcon} from "lucide-react";
import {NavItem} from "@/components/layout/NavItem";
import {MoodCard} from "@/components/layout/MoodCard";
import "./SideBar.css"
import IconButton from "@/components/IconButton";
import { useTranslation } from 'react-i18next';


const NAV_LINKS = [
    { label: 'Dashboard',        href: '/dashboard',  icon: <DashboardIcon size={24}/> },
    { label: 'Moodboards',       href: '/moodboards', icon: <LayersIcon /> },
    { label: 'Shooting Planner', href: '/planner',    icon: <CalendarIcon />  },
    { label: 'Community',        href: '/community',  icon: <UsersRoundIcon/> },
]

const MOODS = [
    { label: 'Outdoor Shooting', sub: 'Camera + Reflectors', color: 'teal'  },
    { label: 'Studio Setup',     sub: '3-Point Lighting',    color: 'amber' },
]

export function Sidebar({ collapsed, onToggle, activeNav, onNavChange }) {
    const { t } = useTranslation();
    return (
        <aside
            className={`sidebar ${collapsed ? 'sidebar--collapsed' : ''}`}
            aria-label="Main navigation"
        >


            {/* Toggle button */}
            <button
                className="sidebar__toggle"
                onClick={onToggle}
                aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                aria-expanded={!collapsed}
            >
                <ChevronLeftIcon className="sidebar__toggle__icon"/>  {/* rotates via CSS when collapsed */}
            </button>


            <IconButton
                className={`sidebar__create ${collapsed ? 'sidebar__create--collapsed' : ''}`}
                icon="plus-icon"
                label={t('sideBar__create')}
                onClick={()=>{}}
            />


            {/* Primary nav */}
            <nav className="sidebar__nav" aria-label="Primary">
                {NAV_LINKS.map(link => (
                    <NavItem
                        href={link.href}
                        icon={link.icon}
                        label={link.label}
                        collapsed={collapsed}
                    />
                ))}
            </nav>
            {/* Saved moods */}
            {
                !collapsed &&
                <div className="sidebar__moods">
        <span className="sidebar__section-header" aria-hidden={collapsed}>
            {t('sideBar__savedMoods')}
        </span>
                    {MOODS.map(mood => (
                        <MoodCard key={mood.label} {...mood} collapsed={collapsed} />
                    ))}
                </div>

            }



            {/* Settings — bottom */}
            <div className="sidebar__bottom">
                <div className="sidebar__bottom-divider" />
                <NavItem
                    href={"settings"}
                    icon={<SettingsIcon/>}
                    label={t("sideBar__settings")}
                    collapsed={collapsed}


                    icon={<SettingsIcon />}
                    label={t("sideBar__settings")}
                    active={activeNav === '/settings'}
                    collapsed={collapsed}
                    onClick={() => onNavChange('/settings')}
                />
            </div>

        </aside>
    )
}


import "./SideBar.css";
import {DashboardIcon} from "@radix-ui/react-icons";
import {CalendarIcon, ChevronDownIcon, LayersIcon, PlusIcon, SettingsIcon, UsersRoundIcon} from "lucide-react";
import {useState} from "react";
import {NavItem} from "@/components/layout/NavItem";
import {MoodCard} from "@/components/layout/MoodCard";
import "./SideBar.css"
import IconButton from "@/components/IconButton";

const NAV_LINKS = [
    { label: 'Dashboard',        href: '/dashboard',  icon: <DashboardIcon /> },
    { label: 'Moodboards',       href: '/moodboards', icon: <LayersIcon /> },
    { label: 'Shooting Planner', href: '/planner',    icon: <CalendarIcon />  },
    { label: 'Community',        href: '/community',  icon: <UsersRoundIcon/> },
]

const MOODS = [
    { label: 'Outdoor Shooting', sub: 'Camera + Reflectors', color: 'teal'  },
    { label: 'Studio Setup',     sub: '3-Point Lighting',    color: 'amber' },
]

export function Sidebar({ collapsed, onToggle, activeNav, onNavChange }) {


    return (
        <aside
            className={`sidebar ${collapsed ? 'sidebar--collapsed' : ''}`}
            aria-label="Main navigation"
        >
            {/* Create CTA */}
            <IconButton
            icon="plus-icon"
            label="Create Project"
            onClick={()=>{}}
            />

            {/* Primary nav */}
            <nav className="sidebar__nav" aria-label="Primary">
                {NAV_LINKS.map(link => (
                    <NavItem
                        key={link.href}
                        icon={link.icon}
                        label={link.label}
                        active={activeNav === link.href}
                        collapsed={collapsed}
                        onClick={() => onNavChange(link.href)}
                    />
                ))}
            </nav>

            {/* Saved moods */}
            <div className="sidebar__moods">
        <span className="sidebar__section-header" aria-hidden={collapsed}>
          Saved Moods Library
        </span>
                {MOODS.map(mood => (
                    <MoodCard key={mood.label} {...mood} collapsed={collapsed} />
                ))}
            </div>

            {/* Settings — bottom */}
            <div className="sidebar__bottom">
                <NavItem
                    icon={<SettingsIcon />}
                    label="Settings"
                    active={activeNav === '/settings'}
                    collapsed={collapsed}
                    onClick={() => onNavChange('/settings')}
                />
            </div>

            {/* Toggle button */}
            <button
                className="sidebar__toggle"
                onClick={onToggle}
                aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                aria-expanded={!collapsed}
            >
                <ChevronDownIcon />  {/* rotates via CSS when collapsed */}
            </button>
        </aside>
    )
}

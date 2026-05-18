import LiveBadge from "@/components/layout/AppBar/LiveBadge";
import {SearchBar} from "@/components/layout/AppBar/SearchBar";
import {Avatar} from "@/components/layout/AppBar/Avatar";
import './AppBar.css';


const NAV_LINKS = [
    { label: 'Projects',    href: '/projects'    },
    { label: 'Moodboards',  href: '/moodboards'  },
    { label: 'Resources',   href: '/resources'   },
];

export default function AppBar() {


    return(
        <header className="appbar">
            <div className="appbar-right">
                <LiveBadge status="live" />
                <SearchBar placeholder="Search inspiration..." shortcut="Strg F" />
                <div className="divider" />
                <Avatar initials="MJ" color="purple" />
            </div>
        </header>
    )
}

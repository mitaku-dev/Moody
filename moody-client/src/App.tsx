import { useState } from 'react'
import './App.css'
import MoodCanvas from "@/components/MoodCanvas";
import {Theme} from "@radix-ui/themes";
import * as React from "react";
import AppBar from "@/components/layout/AppBar/AppBar";
import {Sidebar} from "@/components/layout/SideBar";

function App() {
    const [collapsed, setCollapsed] = useState(false);

  return (
    <>
            <div className={`app-shell ${collapsed ? 'app-shell--collapsed' : ''}`}>
                <AppBar/>
                <Sidebar
                onToggle={() => setCollapsed(c => !c)}
                collapsed={collapsed}/>
                <MoodCanvas/>
            </div>

    </>
  )
}

export default App

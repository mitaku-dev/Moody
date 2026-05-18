import { useState } from 'react'
import './App.css'
import MoodCanvas from "@/components/MoodCanvas";
import {Theme} from "@radix-ui/themes";
import * as React from "react";
import AppBar from "@/components/layout/AppBar/AppBar";
import {Sidebar} from "@/components/layout/SideBar";
import {Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "@/components/Dashboard";

function App() {
    const [collapsed, setCollapsed] = useState(false);

  return (
    <>
            <div className={`app-shell ${collapsed ? 'app-shell--collapsed' : ''}`}>
                <AppBar/>
                <Sidebar
                onToggle={() => setCollapsed(c => !c)}
                collapsed={collapsed}/>
                <Routes>
                    <Route path="/dashboard"  element={<Dashboard />} />
                    <Route path="/moodboards" element={<MoodCanvas />} />
                    <Route path="*"           element={<Navigate to="/moodboards" replace />} />
                </Routes>
            </div>

    </>
  )
}

export default App

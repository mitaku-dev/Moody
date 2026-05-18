import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AppToolbar from "@/components/app-toolbar";
import MoodCanvas from "@/components/MoodCanvas";
import {Theme} from "@radix-ui/themes";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Theme>
            <MoodCanvas/>
        </Theme>

    </>
  )
}

export default App

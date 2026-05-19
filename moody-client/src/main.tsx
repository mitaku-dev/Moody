import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './i18n'
import {ThemeProvider} from "next-themes";
import { BrowserRouter } from 'react-router-dom'
import {Provider} from "react-redux";
import store from "@/store";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
      <ThemeProvider>
          <BrowserRouter>
              <App />
          </BrowserRouter>

      </ThemeProvider>
      </Provider>
  </StrictMode>,
)

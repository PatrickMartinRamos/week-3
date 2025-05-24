import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import {Test, BoxHead} from './webApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Test />
    <BoxHead />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import {Test, BoxHead, BodyText} from './webApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Test />
    <BoxHead />
    <BodyText />
  </StrictMode>,
)

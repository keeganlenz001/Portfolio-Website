import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'

import LandingPage from './landing_page.tsx'
import AboutPage from './about_page.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className="page_wrapper">
            <LandingPage></LandingPage>
            <AboutPage></AboutPage>
        </div>
    </StrictMode>,
);
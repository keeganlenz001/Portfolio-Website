import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import LandingPage from './landing_page.tsx'
import SkillsPage from './about_page.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className="page_wrapper">
            <LandingPage></LandingPage>
            <SkillsPage></SkillsPage>
        </div>
    </StrictMode>,
);
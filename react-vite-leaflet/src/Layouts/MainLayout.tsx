import React from "react"
import { Link } from "react-router-dom"

import './styles.scss'


export type MainLayoutProps = {
    children: React.ReactNode
}

const MainLayout = ({children}: MainLayoutProps) => {
    return ( 
    <div className="main-layout">
        <nav className="main-layout__navigation">
            <ul className="main-layout__navigation__list">
                <li className="main-layout__navigation__list__item">
                    <Link to={`/test`}>Test</Link>
                </li>
                <li className="main-layout__navigation__list__item">
                    <Link to={`/link2`}>Link 2</Link>
                </li>
                <li className="main-layout__navigation__list__item">
                    <Link to={`/link3`}>Link 3</Link>
                </li>
            </ul>
        </nav>
        <div className="main-layout__content">
            {children}
        </div>
    </div> 
    )
}

export default MainLayout
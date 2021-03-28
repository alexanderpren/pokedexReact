import React from 'react'
import { Sidebar } from './Sidebar'


export const HomeScreen = () => {
    return (
        <div className="home__main-content">
            
            <Sidebar />

            <main>
                <h1>Main Content</h1>
            </main>
            
        </div>
    )
}

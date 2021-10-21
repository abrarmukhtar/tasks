import React from 'react'
import Logo from '../Header/fb.jpg'
export default function Header() {
    return (
        <header style={{border: "1px solid black"}}>
            <div className="nav_container">
                <div className="logo">
                    <img src={Logo} alt="image not found"/>
                    <input type="text" placeholder="Search Facebook"/>
                </div>
           
            </div>
        </header>
    )
}

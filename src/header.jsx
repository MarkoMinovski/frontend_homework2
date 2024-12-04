import React from 'react'
import finkiLogo from './assets/Logo_FINKI_UKIM_EN-removebg.png'
import './App.css'

export function Header({setPage}) {
    return (
        <>
            <div className="header-container">
                    <img src={finkiLogo} className="logo" alt="finki Logo"/>
                    <p>
                        <button className={"nav-button"} onClick={() => setPage("AboutUs")}>
                            About Us
                        </button>
                    </p>

                    <p>
                        <button className={"nav-button"} onClick={() => setPage("IndividualStats")}>
                            Individual Statistics
                        </button>
                    </p>
            </div>
        </>
    )
}
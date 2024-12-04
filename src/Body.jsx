import React from "react";
import { Sidebar } from "./Sidebar";
import MSE_Logo from "./assets/Macedonian_Stock_Exchange_Logo.png";
import {Table} from "./IndividualStatisticsTable.jsx";

export function Body({ currentPage }) {
    let bodyContent = <AboutUsBody></AboutUsBody>

    if (currentPage === "AboutUs") {
        bodyContent = <AboutUsBody></AboutUsBody>
    } else if (currentPage === "IndividualStats") {
        bodyContent = <Table></Table>
    }

    return (
        <>
            <div className="body-container">
                <Sidebar/>
                <div className="content">
                    {bodyContent}
                </div>
            </div>
        </>
    );
}


function AboutUsBody() {
    return (<>
            <h1>About us</h1>
            <p>
            This website was created for the purposes of the homework assignments at the course Design and
                Architecture of Software at FINKI (FCSE) 2024/2025. The purpose of the app is to provide general
                analysis of the Macedonian Stock Exchange, showcasing general trends and patterns, allowing users
                to get a clean grasp over the history of the market situation. This in turn helps users plan
                and strategize future investments with a clear goal and a transparent view of past mistakes and
                successes.
            </p>

            <ul>
                Created by:
                <li>Marko Minovski</li>
                <li>Nikola Janev</li>
                <li>Ermal Baki</li>
            </ul>

            <p>If you find bugs, please contact us at: placeholder@gmail.com</p>

            <img src={MSE_Logo} alt="MSE_Logo" className="logo"/>
        </>
    );
}
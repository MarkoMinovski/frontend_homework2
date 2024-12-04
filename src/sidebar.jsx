import { fetchAllEndpoint, getLatestTradeDate } from "./fetchGeneralStats.js";
import React from "react";
import { useEffect, useState } from "react";


export function Sidebar() {
    const [length, setLength] = useState("N/A");
    const [latestTradeDate, setLatestTradeDate] = useState("N/A");

    useEffect( () => {


        async function getData() {
            const allArray = await fetchAllEndpoint();
            const latestTradeDate = await getLatestTradeDate();
                setLength(allArray.length);
                setLatestTradeDate(new Date(latestTradeDate).toDateString());
        }



        getData().then((data) => {
            console.log(data);
        })
    }, [])

    return ( <>
           <div className={"sidebar-wrapper"}>

               <div className="sidebar-text">General statistics</div>
               <div className={"items"}>
                   <p className={"items-wrap"}>
                       <p className={"length"}>Total companies available: {length}</p>
                   </p>

                   <p className={"items-wrap"}>
                       <p className={"latest-trade-date"}>Latest trade date: {latestTradeDate}</p>
                   </p>

               </div>
           </div>

        </>
    )
}
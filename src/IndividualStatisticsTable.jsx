import { fetchAllEndpoint } from "./fetchGeneralStats.js";
import {useEffect, useState} from "react";


async function generateChoices() {
    const all = await fetchAllEndpoint();
    const demo_limit = 5
    let choices = []

    while (choices.length < demo_limit) {
        const indexToAccessInAllArray = Math.floor(Math.random() * all.length)
        if (!choices.includes(all[indexToAccessInAllArray]))
            choices.push(all[indexToAccessInAllArray]);
    }

    return choices
}

function TickerOptions({onTickerSelect, optionsReady}) {
    const [options, setOptions] = useState([])


    useEffect(() => {

        async function getChoices() {
            const op = await generateChoices();
            setOptions(op);

            if (op.length > 0 && optionsReady) {
                optionsReady(op[0])
            }
        }

        getChoices();
    }, [])

    const handleSelectionChange = (event) => {
        onTickerSelect(event.target.value);
    };

    const options_tags = options.map(pair =>
        <option key={pair.ticker} value={pair.ticker}>{pair.ticker}</option>
    );

    return (
        <>
            <select className={"option"} name={"options"} onChange={handleSelectionChange}>
                {options_tags}
            </select>
        </>
    )
}

async function getInfoForTicker(ticker_id) {
    const resp = await fetch("http://127.0.0.1:5000/tickers/" + ticker_id);
    return resp.json();
}

export function Table() {

    const [selectedTicker, setSelectedTicker] = useState("");
    const [tickerData, setTickerData] = useState(null);

    useEffect(() => {
        if (!selectedTicker) return;

        async function fetchData() {
            const data = await getInfoForTicker(selectedTicker);
            setTickerData(data);
        }

        fetchData();
    }, [selectedTicker]);


    const handleDefaultSelection = (defaultTicker) => {
        setSelectedTicker(defaultTicker.ticker);
    }

    const tableData = tickerData ? tickerData.map(row =>
        <tr key={row.date_str}>
            <td>{row.date_str}</td>
            <td>{row.last_trade_price}</td>
            <td>{row.max}</td>
            <td>{row.min}</td>
            <td>{row.avg}</td>
            <td>{row.percentage_change_decimal}</td>
            <td>{row.vol}</td>
            <td>{row.BEST_turnover}</td>
            <td>{row.total_turnover}</td>
        </tr>
    ) : null

    return ( <>
            <div className={"selection-and-text"}>
                <p>Select ticker:</p>
                <TickerOptions onTickerSelect={setSelectedTicker} optionsReady={handleDefaultSelection}></TickerOptions>
            </div>

            <table className={"stats_table"}>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Last Trade Price</th>
                    <th>Max</th>
                    <th>Min</th>
                    <th>Avg. Price</th>
                    <th>% Change</th>
                    <th>Volume</th>
                    <th>Turnover in BEST (denars)</th>
                    <th>Total Turnover (denars)</th>
                </tr>
                </thead>
                <tbody>
                {tableData || <td colSpan="9" rowSpan="9">
                    No info
                </td>}
                </tbody>
            </table>
        </>
    )

}

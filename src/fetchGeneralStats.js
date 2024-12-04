export async function fetchAllEndpoint() {
    let ret = null
    try {
        const response = await fetch("http://127.0.0.1:5000/all");
        const json = await response.json();
        ret = json;
    } catch (error) {
        console.error(error.message);
    }

    return ret
}

export async function getLatestTradeDate() {
    let ret = null
    try {
        const response = await fetch("http://127.0.0.1:5000/tickers/latest");
        const json = await response.json();
        console.log(json);
        ret = json;
    } catch (error) {
        console.error(error.message);
    }

    return ret
}
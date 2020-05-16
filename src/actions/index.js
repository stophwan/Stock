import axios from 'axios';

const BASE_URL = "https://finnhub.io/api/v1";
const API_KEY = "bqgom8nrh5r8lcmqaa10"


export function createSymbol(){
    return async(dispatch) =>{
        const symbol_url = `${BASE_URL}/stock/symbol`;
        try{
            const result = await axios(symbol_url, {params: {
                exchange: 'US',
                token: API_KEY
            }})
            console.log(result.data);
            dispatch({type: 'CREATE_SYMBOL', payload: result.data})
        }catch(error){

        }
    }
}

export function createMainInfo(company){
    return async (dispatch) => {
        dispatch({type: 'START_LOADING'});
        const company_url = `${BASE_URL}/stock/profile2`;
        const stockinfo_url = `${BASE_URL}/quote`;

        try{
            const profile = await axios(company_url, {params: {
                symbol: company,
                token: API_KEY
            }})
            const quote = await axios(stockinfo_url, {params:{
                symbol: company,
                token: API_KEY
            }})

            quote.data.name = profile.data.name
            quote.data.ticker = profile.data.ticker
            quote.data.logo = profile.data.logo
            dispatch({
                type: 'CREATE_MAININFO',
                payload: quote.data
            })
        }catch(error){
            dispatch({
                type:'ERROR',
                payload: error
            })
        }finally{
            dispatch({type: 'END_LOADING'})
        }
    }
}


export function createCompanyInfo(company){
    return async (dispatch) =>{
        const company_url = `${BASE_URL}/stock/profile2`;
        try{
            const profile = await axios(company_url, {params: {
                symbol: company,
                token: API_KEY
            }})
            console.log(profile)
            dispatch({type: 'CREATE_COMPANYINFO', payload: profile.data});
        }catch(error){
        }
    }
}

export function createStockInfo(company){
    return async (dispatch) => {
        const stockinfo_url = `${BASE_URL}/quote`
        try{
            const quote = await axios(stockinfo_url, {params:{
                symbol: company,
                token: API_KEY
            }})
            quote.data.ticker = company
            quote.data.contrast_num = (quote.data.c-quote.data.pc).toFixed(2)
            quote.data.contrast_per = ((quote.data.c-quote.data.pc)/quote.data.pc*100).toFixed(2)
            console.log(quote)
            dispatch({type: 'CREATE_STOCKINFO',payload: quote.data})
        }catch(error){

        }
    }

}


export function createStockChart(company, resolution='D'){
    return async (dispatch) =>{
        const stockchart_url = `${BASE_URL}/stock/candle`;
        try{
            let minus;
            switch(resolution){
                case 'D':
                    minus = 15*24*60*60;
                    break;
                case 'W':
                    minus = 105*24*60*60;
                    break;
                case 'M':
                    minus = 420*24*60*60
                    break;
            }
            console.log(resolution)
            const toDate = Math.floor(Date.now() / 1000)
            const fromDate = toDate - minus
            const stock = await axios(stockchart_url, {params: {
                symbol: company,
                resolution: resolution,
                from : fromDate,
                to: toDate,
                token: API_KEY
            }})
            stock.data.ticker = company
            
            dispatch({type: 'CREATE_STOCKCHART', payload: stock.data});
        }catch(error){
        }
    }
}

export function createStockAnalysts(company){
    return async (dispatch) => {
        const stockanalysts_url = `${BASE_URL}/price-target`
        try{
            const stockanalysts = await axios(stockanalysts_url, {params:{
                symbol: company,
                token: API_KEY
            }})
            console.log(stockanalysts)
            stockanalysts.data.ticker = company
            dispatch({type: 'CREATE_STOCKANALYSTS', payload: stockanalysts.data})
        }catch(error){

        }
    }

}


export function minuteStock(company){
    return async (dispatch) =>{
        const minuteStock_url = `${BASE_URL}/stock/candle`;
        try{
            const toDate = Math.floor(Date.now() / 1000)
            const fromDate = toDate - 10*60
            const stock = await axios(minuteStock_url, {params: {
                symbol: company,
                resolution: '1',
                from : fromDate,
                to: toDate,
                token: API_KEY
            }})
            let stockdata = [];
            stock.data.t.forEach((data, idx) => {
                let a ={}
                a["o"] = stock.data.o[idx];
                a["h"] = stock.data.h[idx];
                a["l"] = stock.data.l[idx];
                a["c"] = stock.data.c[idx];
                a["v"] = stock.data.v[idx];
                a["t"] = data;
                stockdata.push(a)
            })
            stockdata.ticker = company
            console.log(stockdata)
            dispatch({type: 'MINUTESTOCK', payload: stockdata});
        }catch(error){
        }
    }
}

export function dayStock(company){
    return async (dispatch) =>{
        const dayStock_url = `${BASE_URL}/stock/candle`;
        try{
            const toDate = Math.floor(Date.now() / 1000)
            const fromDate = toDate - 5*24*60*60
            const stock = await axios(dayStock_url, {params: {
                symbol: company,
                resolution: 'D',
                from : fromDate,
                to: toDate,
                token: API_KEY
            }})
            let stockdata = [];
            stock.data.t.forEach((data, idx) => {
                let a ={}
                a["o"] = stock.data.o[idx];
                a["h"] = stock.data.h[idx];
                a["l"] = stock.data.l[idx];
                a["c"] = stock.data.c[idx];
                a["v"] = stock.data.v[idx];
                a["t"] = data;
                stockdata.push(a)
            })
            console.log(stockdata)
            stockdata.ticker = company
            dispatch({type: 'DAYSTOCK', payload: stockdata});
        }catch(error){
        }
    }
}




export function chageResolution(resolution){
    return{
        type:'CHANGE_RESOLUTION', 
        resolution:resolution
    }
}

export function createNewsInfo(company){
    return async (dispatch) =>{
        const newsinfo_url = `${BASE_URL}/company-news`;
        try{
            var today = new Date();
            var toDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDay()+10);
            var weekAgo = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDay()+3);
            const newsinfo = await axios(newsinfo_url, {params: {
                symbol: company,
                from: weekAgo,
                to : toDate,
                token: API_KEY
            }})
            dispatch({type: 'CREATE_NEWSINFO', payload: newsinfo.data});
        }catch(error){
        }
    }
}

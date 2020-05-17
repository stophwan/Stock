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
            stock.data.resolution = resolution

            dispatch({type: 'CREATE_STOCKCHART', payload: stock.data});
        }catch(error){
        }
    }
}

export function createStockAnalysts(company){
    return async (dispatch) => {
        const stockanalysts_url = `${BASE_URL}/stock/price-target`
        try{
            const stockanalysts = await axios(stockanalysts_url, {params:{
                symbol: company,
                token: API_KEY
            }})
            stockanalysts.data.ticker = company
            dispatch({type: 'CREATE_STOCKANALYSTS', payload: stockanalysts.data})
        }catch(error){

        }
    }

}

export function createStockEstimate(company){
    return async (dispatch) => {
        const stockestimate_url =  `${BASE_URL}/stock/eps-estimate`
        try{
            const stockestimate = await axios(stockestimate_url,{params:{
                symbol : company,
                token : API_KEY
            }})

            console.log(stockestimate)
            let stockesdata = stockestimate.data.data.slice(0,10)
            stockesdata[0].ticker = company;
            console.log(stockesdata)
            dispatch({type: 'CREATE_STOCKESTIMATE', payload: stockesdata})
        }catch(error){

        }
    }
}



export function minuteStock(company){
    return async (dispatch) =>{
        const minuteStock_url = `${BASE_URL}/stock/candle`;
        try{
            const toDate = Math.floor(Date.now() / 1000)
            const fromDate = toDate - 50*60*60
            const stock = await axios(minuteStock_url, {params: {
                symbol: company,
                resolution: '60',
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
            dispatch({type: 'MINUTESTOCK', payload: stockdata.reverse()});
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
            stockdata.ticker = company
            dispatch({type: 'DAYSTOCK', payload: stockdata.reverse()});
        }catch(error){
        }
    }
}

function FormatDate(date){
    var year = date.getFullYear();              
    var month = (1 + date.getMonth());          
    month = month >= 10 ? month : '0' + month;  
    var day = date.getDate();                   
    day = day >= 10 ? day : '0' + day;          
    return  year + '-' + month + '-' + day;
  }

export function createNewsInfo(company){
    return async (dispatch) =>{
        const newsinfo_url = `${BASE_URL}/company-news`;
        try{
            let days = 1000 * 60 * 60 * 24
            var today = new Date();
            var fromday = new Date(today.getTime() - 7 * days);

            today = FormatDate(today);
            fromday = FormatDate(fromday)
            const newsinfo = await axios(newsinfo_url, {params: {
                symbol: company,
                from: fromday,
                to : today,
                token: API_KEY
            }})
            newsinfo.ticker = company
            dispatch({type: 'CREATE_NEWSINFO', payload: newsinfo.data});
        }catch(error){
        }
    }
}

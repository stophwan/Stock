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
            
            console.log(stock)
            dispatch({type: 'CREATE_STOCKCHART', payload: stock.data});
        }catch(error){
        }
    }
}


export function chageResolution(resolution){
    return{
        type:'CHANGE_RESOLUTION', resolution:resolution
    }
}


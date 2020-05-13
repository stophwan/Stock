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

export function createStockChart(company){
    return async (dispatch) =>{
        const company_url = `${BASE_URL}/stock/candle`;
        try{
            const stock = await axios(company_url, {params: {
                symbol: company,
                resolution: '60',
                from : 1572651390,
                to: 1572910590,
                token: API_KEY
            }})
            console.log(stock)
            dispatch({type: 'CREATE_STOCKCHART', payload: stock.data});
        }catch(error){
        }
    }
}
import produce from 'immer'

const baseState = {

    companies: [
        {
            country: 'US',
            currency: 'USD',
            exchange: 'NASDAQ NMS - GLOBAL MARKET',
            finnhubIndustry: 'Technology',
            ipo: '1980-12-12',
            logo: 'https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png',
            marketCapitalization: 1289725,
            name: 'Apple Inc',
            phone: '14089961010',
            shareOutstanding: 4334.335,
            ticker: 'AAPL',
            weburl: 'https://www.apple.com/'
        }
    ]
}

const reducer = produce((state, action)=>{

}, baseState)

export default reducer;
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
        },
        {
            country: "IN",
            currency: "INR",
            exchange: "NATIONAL STOCK EXCHANGE OF INDIA",
            finnhubIndustry: "Banking",
            ipo: "1994-11-03",
            logo: "https://static.finnhub.io/logo/548791dc-80e7-11ea-8e5a-00000000092a.png",
            marketCapitalization: 1527001,
            name: "State Bank of India",
            phone: "912222740841",
            shareOutstanding: 8924.6,
            ticker: "SBIN.NS",
            weburl: "https://www.sbi.co.in/"
        },
        {
            country: "DE",
            currency: "EUR",
            exchange: "XETRA",
            finnhubIndustry: "Automobiles",
            ipo: "1926-01-01",
            logo: "https://static.finnhub.io/logo/1c89169a-80e6-11ea-83c5-00000000092a.png",
            marketCapitalization: 34718.34,
            name: "Bayerische Motoren Werke AG",
            phone: "49893820",
            shareOutstanding: 658.8625,
            ticker: "BMW.DE",
            weburl: "https://www.bmwgroup.com/"
        }
    ],


}

const reducer = produce((state, action)=>{

}, baseState)

export default reducer;
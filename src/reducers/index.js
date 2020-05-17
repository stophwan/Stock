import produce from 'immer'

const baseState = {
    loading: false,
    error: null,
    companies: null,
    maininfo : [],
    companyinfo: null,
    stockinfo: null,
    stockcandle: null,
    stockanalysts: null,
    minutestock: null,
    daystock: null,
    newsinfo: null,
}

const reducer = produce((state, action)=>{
    switch(action.type){
        case "CREATE_SYMBOL":
            state.companies = action.payload;
            break;
        case "CREATE_MAININFO":
            state.maininfo.push(action.payload);
            break;
        case "CREATE_COMPANYINFO":
            state.companyinfo = action.payload;
            break
        case "CREATE_STOCKINFO":
            state.stockinfo = action.payload;
            break
        case "CREATE_STOCKCHART":
            state.stockcandle = action.payload;
            break;
        case "CREATE_STOCKANALYSTS":
            state.stockanalysts = action.payload
            break;
        case "MINUTESTOCK":
            state.minutestock = action.payload
            break;
        case "DAYSTOCK":
            state.daystock = action.payload
            break;
        case "CREATE_NEWSINFO":
            state.newsinfo = action.payload
            break;
        case 'ERROR':
            state.error = action.payload;
            break;
        case 'START_LOADING':
            state.loading = true;
            break;
        case 'END_LOADING':
            state.loading = false;
            break;
        default:
            break;
    }
}, baseState)

export default reducer;
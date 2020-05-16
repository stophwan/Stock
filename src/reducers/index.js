import produce from 'immer'

const baseState = {
    companies: null,
    maininfo : [],
    companyinfo: null,
    stockinfo: null,
    stockcandle: null,
    stockanalysts: null,
    minutestock: null,
    daystock: null,
    newsinfo: null,
    resolution: 'D'
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
        case "CHANGE_RESOLUTION":
            state.resolution = action.resolution;
            break;
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
        default:
            break;
    }
}, baseState)

export default reducer;
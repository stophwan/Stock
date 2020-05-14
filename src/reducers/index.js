import produce from 'immer'

const baseState = {
    companies: null,
    maininfo : [],
    companyinfo: null,
    stockinfo: null,
    stockcandle: null,
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
        case "RESOLUTION_D":
            state.resolution = 'D';
            break;
        case "RESOLUTION_W":
            state.resolution = 'W';
            break;
        case "RESOLUTION_M":
            state.resolution = 'M';
            break;
        case "CREATE_STOCKCHART":
            state.stockcandle = action.payload;
            break;
        default:
            break;
    }
}, baseState)

export default reducer;
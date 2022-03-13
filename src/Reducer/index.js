
const initialState = {
    staticData: [],
    allData: [],
    Data: [],
    DataForFilter: [],
    DataOrdered: []
};

function rootReducer(state = initialState, action){
    switch(action.type){
        default:
            return state;
        
        case 'GET_DATA':
            return {
                ...state,
                allData: action.payload,
                Data: action.payload,
                DataForFilter: action.payload,
                staticData: action.payload
            };
        
        case 'ORDER_BY_CUIT':
            const orderedArr = action.payload === 'mayor' ? state.allData.sort(function(a, b){
                if(a.CUIT > b.CUIT){
                    return -1
                }
                else if(a.CUIT < b.CUIT){
                    return 1
                }
                return 0
            }) :
            state.allData.sort(function (a, b){
                if(a.CUIT > b.CUIT){
                    return 1
                }
                else if(a.CUIT < b.CUIT){
                    return -1
                }
                return 0
            })
            return{
                ...state,
                Data: orderedArr
            }

        case 'ORDER_BY_COMERCIOS':
            const sortArr = action.payload === 'asc' ? state.allData.sort(function(a, b){
                if(a.Comercio.toLowerCase() > b.Comercio.toLowerCase()){
                    return 1
                }
                if(a.Comercio.toLowerCase() < b.Comercio.toLowerCase()){
                    return -1
                }
                return 0
            }) :
            state.allData.sort(function (a, b) {
                if(a.Comercio.toLowerCase() > b.Comercio.toLowerCase()){
                    return -1
                }
                if(a.Comercio.toLowerCase() < b.Comercio.toLowerCase()){
                    return 1
                }
                return 0
            })
            return{
                ...state,
                Data: sortArr,
                DataOrdered: sortArr
            }

        case 'FILTER_ACTIVO':
            if(state.DataOrdered.length !== 0){
                var activoFilteredAndOrdered = action.payload === 'Activo' ? state.DataForFilter.filter(el => el.Activo === true) : state.DataForFilter.filter(el => el.Activo === false)   
            }
            else{
                var activoFiltered = action.payload === 'Activo' ? state.Data.filter(el => el.Activo === true) : state.Data.filter(el => el.Activo === false)
            }

            return {
                ...state,
                allData: action.payload === 'Todos' ? state.staticData : activoFilteredAndOrdered? activoFilteredAndOrdered : activoFiltered 
            }

    };
};

export default rootReducer
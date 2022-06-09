import { giveChangeOperation } from "../actions/action-types";
import { GIVE_CHANGE, INPUT_AMOUNT, RESET} from "../constants/actions";

const stateInit = {
    resultat : [0,0,0,0,0,0],
    denominations : [1, 5, 10, 20, 50, 100],
    number : 0,
    message:""
};

const reducer = (state = stateInit, action = {}) => {
    switch (action.type) {
        case GIVE_CHANGE:
            
            return {
                ...state,
                resultat : giveChangeOperation(parseInt(state.number), state.denominations)
            };
        
        case INPUT_AMOUNT:

            const num = parseInt(action.payload)
            if(isNaN(num)){
                return{
                    ...state,
                    resultat : [0,0,0,0,0,0],
                    number : parseInt(action.payload),
                    message:"Veuillez entrer un nombre"
                }
            }

            return{
                ...state,
                number : parseInt(action.payload),
                message:""
            }
        case RESET:
            return{
                ...state,
                resultat : [0,0,0,0,0,0]
            }
        default:
            return state;
    }
};

export default reducer;

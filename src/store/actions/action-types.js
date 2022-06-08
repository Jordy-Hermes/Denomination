import { GIVE_CHANGE, INPUT_AMOUNT, RESET } from "../constants/actions";

export const inputAmount = payload => ({type: INPUT_AMOUNT, payload});
export const giveChange = payload => ({type: GIVE_CHANGE, payload});
export const reset = ()=> ({type: RESET});



export function giveChangeOperation(montant, denominations){
    
    const resultat = [0,0,0,0,0,0]
    for(let i = denominations.length-1; i>= 0; i--)
    {
        let firstResult = Math.trunc(montant/denominations[i])
        if(firstResult === 0)
        {
            resultat[i] = 0;
        }
        else
        {
            resultat[i]=parseInt(firstResult);
            montant = montant%denominations[i]
        }
    }
    return resultat;
}
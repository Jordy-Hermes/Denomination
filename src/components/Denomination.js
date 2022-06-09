import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { giveChange, inputAmount, reset } from '../store/actions/action-types';
import Navigation from './Navigation';
import Button from '../styles/Button'
import Input from '../styles/Input';

const Denomination = () => {
    const dispatch = useDispatch();
    const { amount, resultat, message  } = useSelector(state => state);

    function handleChange(e){
        dispatch(inputAmount(parseInt(e.target.value)));
        
    }

    // function bruleTout{
    //     dispatch(reset());

    // }

    return (
        <div>
            <Navigation />
            <div className='content'>
            <p><Input onChange={handleChange} type="text" required></Input></p>
            {message !== '' && (<p>{message}</p>)}
            <p>Nombre de 100 : {resultat[5]}</p>
            <p>Nombre de 50 : {resultat[4]}</p>
            <p>Nombre de 20 : {resultat[3]}</p>
            <p>Nombre de 10 : {resultat[2]}</p>
            <p>Nombre de 5 : {resultat[1]}</p>
            <p>Nombre de 1 : {resultat[0]}</p>
            <p>{amount}</p>
            <p><Button onClick={()=>dispatch(giveChange(amount))}>Convertir</Button></p>
            <p><Button onClick={()=>dispatch(reset())}>Reset</Button></p>
            </div>
        </div>
    );
};

export default Denomination;

import React from 'react';
import {useSelector, RootStateOrAny} from 'react-redux';

const Balance = () => {

    function currencyFormat(num:any) {
        return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' PLN';
     }

    const balance = useSelector((state:RootStateOrAny) => state.balance);
    return (
        <div>
            <div className="balance">
                <h2>Saldo: {currencyFormat(balance)}</h2>
            </div>
        </div>
    )
}

export default Balance;

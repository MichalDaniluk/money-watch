import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import Category from '../Category/Category';

import {addValue,subValue} from '../../actions';
import axios from 'axios';

interface IFormProps {
    'cl':string,
    'onChangeBalance':any,
    'onAdd':any,
    'onSub':any
}

const Form: React.FunctionComponent<IFormProps> = () => {
    const [value, setValue] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
    const [category, setCategory] = useState(0);
    const dispatch = useDispatch();

    const onChangeValueHandler = (event:any) => {
        setValue(+event.target.value);
    }

    const onAddValueHandler = (event:any) => {
        dispatch(subValue(value));
        event.target.value = '';
        const res = axios.get('http://localhost:5000/api/transactions/add/1/1/1');
    }



    return (
        <div className="form">

                <input className="value" type="number" name="outGo" onChange={onChangeValueHandler} required/>
                <Category onClick={() => dispatch(setCategory(category))}/>
                <button className="btn btn-sub" onClick={onAddValueHandler}>Wypłata</button>
                <button className="btn btn-add" onClick={() => dispatch(addValue(value))}>Wpłata</button>
                <DatePicker name="date" selected={startDate} onChange={(date:Date) => setStartDate(date)} />

        </div>
    )
}

export default Form;

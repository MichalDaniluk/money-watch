import {Link} from 'react-router-dom';
import { setAccount } from '../../actions';
import {useDispatch} from 'react-redux';

const Account = (item:any) => {
    const dispatch = useDispatch();
    return (
        <Link to="/form" onClick={()=>{dispatch(setAccount(item.item.id));}}>
        <div className="cards">
            <div>Logo</div>
            <div>{item.item.name}</div>
            <div>Saldo</div>
        </div>
        </Link>
    )
}

export default Account;

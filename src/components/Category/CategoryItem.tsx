import {useSelector, useDispatch, RootStateOrAny} from 'react-redux';
import { setCategory } from '../../actions';

const CategoryItem = (item: any) => {
    const dispatch = useDispatch();
    const category = useSelector((state:RootStateOrAny) => state.category);

    return (
        <div onClick={() => dispatch(setCategory(item.item.id))}  className="categoryCard {category=== item.item.id && selected}">{item.item.value}</div>
    )
}

export default CategoryItem;

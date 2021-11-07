import CategoryItem from "./CategoryItem";

const Category = (onClick:any) => {

    const items = [
        {
            id:1,
            value:"Spozywcze"
        },
        {
            id:2,
            value:"Ubrania"
        },
        {
            id:3,
            value:'Pies'
        },
        {
            id:4,
            value:'Kod'
        }
    ];

    return (
        <div className="categoryList">
            {
            items.map((item) => <CategoryItem item={item} key={item.id} />
            )}
        </div>
    )
}

export default Category;

import PropTypes from "prop-types"

function List() {
    const fruits = [{id: 1, name: "apple", calories: 95}, 
        {id: 2, name: "strawberry", calories: 20}, 
        {id: 3, name: "pineapple", calories: 100},
        {id: 4, name: "cococnut", calories: 159},
        {id: 5, name: "orange", calories: 45}]
        
    // fruits.sort((a,b) => a.name.localeCompare(b.name)); // ALPHABETICAL
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL
    // fruits.sort((a,b) => a.calories - b.calories); // NUMERIC
    // fruits.sort((a,b) => b.calories - a.calories); // REVERSE NUMERIC

   // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);


    

    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;
                    <b>{fruit.calories}</b></li>);

    return (<ol>{listItems}</ol>);
}

List.defaultProps = {
    category: "Category",
    items: []
}

List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                             name: PropTypes.string,
                                             calories: PropTypes.number}
    )) 
}
export default List;

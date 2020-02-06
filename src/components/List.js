import React from "react";

function List(props) {
  const listItems = props.groceries.map(grocery =>(
    <li key={grocery.id}>{grocery.name}</li>
  ))
  return (
    <ul className="list-group">
      {listItems}
    </ul>
  );
}

export default List;

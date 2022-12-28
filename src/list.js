import React from "react";

const List = ({ arrayList }) => {
  const listItems = arrayList.map((item) => (
    <li key={item.toString()}>{item}</li>
  ));
  return <ul>{listItems}</ul>;
};

export default List;

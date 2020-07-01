import React from "react";

const Transaction = (props) => {
  const { date, description, category, amount } = props.trans
  return (
    <tr onClick={() => props.handleDelete(props.trans)} >
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
};

export default Transaction;

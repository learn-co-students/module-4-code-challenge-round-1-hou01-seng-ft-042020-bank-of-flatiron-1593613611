import React from "react";

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.description}</td>
      <td>{props.amount}</td>
      <td>{props.amount}</td>
    </tr>
  );
};

export default Transaction;

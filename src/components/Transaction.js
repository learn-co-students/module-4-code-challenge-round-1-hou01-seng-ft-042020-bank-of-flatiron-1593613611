import React from "react";

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.trans.amount}</td>
      <td>{props.trans.category}</td>
      <td>{props.trans.date}</td>
      <td>{props.trans.description}</td>
    </tr>
  );
};

export default Transaction;

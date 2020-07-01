import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th onClick={(e) => props.handleSort(e.target.innerText)} >
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th onClick={(e) => props.handleSort(e.target.innerText)} >
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th onClick={(e) => props.handleSort(e.target.innerText)} >
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th onClick={(e) => props.handleSort(e.target.innerText)} >
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {props.transactions.map(trans => (
          <Transaction handleDelete={props.handleDelete} key={trans.id} trans={trans}/>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsList;

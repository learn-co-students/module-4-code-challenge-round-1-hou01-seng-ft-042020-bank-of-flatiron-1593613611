import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  // console.log('this.props.transactions', props.transactions)
  if (props.transactions == null){
   return <h1> Loading ...</h1>
  }
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {props.transactions.map(transaction => {
          return <Transaction key={transaction.id} {...transaction}/>
        })}
      </tbody>
    </table>
  );
};

export default TransactionsList;

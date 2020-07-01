import React from "react";
import Transaction from "./Transaction";

class TransactionsList extends React.Component {
const TransactionsList = () => {
  render(){
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header" >{this.props.date}</h3>
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
        {/* render Transactions here */}
      </tbody>
    </table>
  );
};
}
}


export default TransactionsList;

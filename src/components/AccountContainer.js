import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  render() {
    return (
      <div>
        <Search changeSearch={this.props.changeSearch}/>
        <AddTransactionForm addDate={this.props.addDate}
        addDescription={this.props.addDescription}
        addCategory={this.props.addCategory}
        addAmount={this.props.addAmount}
        postIt={this.props.postIt}/>
        <TransactionsList transactions={this.props.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;

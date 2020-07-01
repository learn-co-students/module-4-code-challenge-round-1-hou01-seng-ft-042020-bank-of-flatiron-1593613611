import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {

  constructor(){
    super()
    this.state = {
      transactions: [],
      searchTrans: []
      
    }
  }

  componentDidMount(){
    fetch(`http://localhost:6001/transactions`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          transactions: data,
        })
      })
   
  }

  searchTerm = (term) => {
    debugger
    this.setState({
      
    })
  }


  addTrans = (e) => {
    this.setState({
      transactions: [...this.state.transactions, e]
    })
    console.log(e)
  }


  render() {
  // {console.log(this.state.transactions)}



    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transactions={this.state.transactions} searchTerm={this.state.searchTerm} addTrans={this.state.addTrans}/>
      </div>
    );
  }
}

export default App;



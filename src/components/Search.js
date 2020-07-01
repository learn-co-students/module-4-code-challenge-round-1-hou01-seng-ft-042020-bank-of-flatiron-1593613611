import React from "react";

class Search extends React.Component{

  state={
    term: null
  }
  
  searchTransaction=(value)=>{
    this.setState({
      term: value
    })
  }

  handleClick=()=>{
this.props.searchTransaction(this.state.term)
  }

  render(){
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={(e) => {this.searchTransaction(e.target.value)}}
      />
      <i className="circular search link icon" onClick={this.handleClick}></i>
    </div>
  );

  }

};

export default Search;

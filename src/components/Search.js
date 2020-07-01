import React from "react";

const Search = (props) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={() => {
          
          console.log("Searching...");
          
        }}

      />
      <i className="circular search link icon" onClick={(e)=>props.searchTerm(e.target.value)}></i>
    </div>
  );
};

export default Search;

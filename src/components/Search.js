import React from "react";

const Search = (props) => {
  const handleChange = (e) => {
    // console.log(e.target.value)
  props.filterSearch(e)
  }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={(e) => {
       handleChange(e)
          // console.log('searching...')
        }}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;

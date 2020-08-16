import React from "react";

function SearchForm(props) {
  return (

    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          // onChange={props.handleInputChange}
          // value={props.search}
          // name="search"
          // type="text"
          // className="form-control"
          // placeholder="Search for an Employee"
          // id="search"
        />
        <button onClick={props.handleFormSubmitWomen} className="btn btn-primary mt-3">
          Search Women
        </button>

        <button onClick={props.handleFormSubmitMen} className="btn btn-primary mt-3">
          Search Men
        </button>
      </div>
    </form>
    
  );

}


  

export default SearchForm;

import React from "react";

function SearchForm(props) {
  return (
    <div>
      <h1>Employee Directory</h1>

      <div>
        <button onClick = {props.handleFormSubmit}className="btn btn-primary mt-3"> 
          See all
          </button>
          <br></br>

          <button onClick={props.handleFormSubmitWomen} className="btn btn-primary mt-3">
            Filter by Women
          </button>
          <br></br>

          <button onClick={props.handleFormSubmitMen} className="btn btn-primary mt-3">
            Filter by Men
          </button>
      </div>
      <form>
        <div className="form-group">
          {/* <label htmlFor="search">Search:</label> */}
          <input
            // onChange={props.handleInputChange}
            // value={props.search}
            // name="search"
            // type="text"
            // className="form-control"
            placeholder="Search for an Employee"
            // id="search"
          />

          <button className="btn btn-primary mt-3"s>
            Search for an Employee
          </button>

        </div>
      </form>

    </div>
    
  );

}


  

export default SearchForm;

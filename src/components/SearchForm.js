import React from "react";
import "./style.css"

function SearchForm(props) {
  return (
    <div className = "main">
      <h1>Employee Directory</h1>

      <div>
        <button onClick = {props.handleFormSubmit}className="btn btn-primary mt-3"> 
          See all
          </button>
          

          <button onClick={props.handleFormSubmitWomen} className="btn btn-primary mt-3">
            Filter by Women
          </button>
       

          <button onClick={props.handleFormSubmitMen} className="btn btn-primary mt-3">
            Filter by Men
          </button>
          
      </div>
      <br></br>
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
          <br></br>

          <button className = "btn btn-primary mt-3"> Go!</button>

        </div>
      </form>

    </div>
    
  );

}


  

export default SearchForm;

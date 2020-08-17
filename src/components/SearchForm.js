import React from "react";
import "./style.css"

function SearchForm(props) {
  return (
    <div className = "main" >
      <h1>Employee Directory</h1>

      <div>
        <button onClick = {props.handleFormSubmit}className="btn btn-info"> 
          See all
          </button>
          

          <button onClick={props.handleFormSubmitWomen} className="btn btn-info">
            Filter by Women
          </button>
       

          <button onClick={props.handleFormSubmitMen} className="btn btn-info">
            Filter by Men
          </button>
          
      </div>
      <br></br>
      <br></br>
      <p></p>
      <form>
        <div className="form-group">
          <input
            onChange={props.handleInputChange}
            type="text"
            className="form-control"
            placeholder="Employee Name"
          />

          <br></br>

          <button onClick = {props.handleFormSubmitSearch} className = "btn btn-info"> Search</button>

        </div>
      </form>

    </div>
    
  );

}


  

export default SearchForm;

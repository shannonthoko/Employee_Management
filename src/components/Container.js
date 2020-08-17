import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Result from "./Result";
import API from "../utils/API";


class Container extends Component {
  state = {
    search: "",
    people: []
  };


  
  componentDidMount() {
    this.seeAll();
    
  }

  seeAll (){
    API.fetch()
    .then(res => this.setState({ people: res.data.results}))
    .catch(err => console.log(err));
    
  }

  

  handleFormSubmit = event => {
    event.preventDefault();
    this.seeAll();

  }

  handleFormSubmitWomen = event => {

    event.preventDefault();
    API.fetchWomen()
    .then(res => this.setState({ people: res.data.results}))
    .catch(err => console.log(err));
    
    
  }

  handleFormSubmitMen = event => {

    event.preventDefault();
    API.fetchMen()
    .then(res => this.setState({ people: res.data.results}))
    .catch(err => console.log(err));
    
    
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmitSearch = event => {

    event.preventDefault();
    const response = this.state.people
    console.log(response);
    const filterName = response.filter(name => name.first === this.state.search);
    this.setState({people: filterName});
    console.log(this.state.people);

    if (response.length === 0){

      
    }

    


  }



  
  render() {
    return (
      <div>
        <SearchForm
          all = {this.state.people}
          handleFormSubmitWomen={this.handleFormSubmitWomen}
          handleFormSubmit={this.handleFormSubmit}
          handleFormSubmitMen = {this.handleFormSubmitMen}
          handleInputChange = {this.handleInputChange}
          handleFormSubmitSearch = {this.handleFormSubmitSearch}
        />
        <Result all={this.state.people}  />
       
      </div>
    );
  }
};

export default Container;

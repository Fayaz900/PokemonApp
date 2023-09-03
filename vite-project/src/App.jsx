import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      item: [],
      searchInput:'',
    };
    this.fetchData();
  }
  async fetchData() {
    let url = "https://pokeapi.co/api/v2/pokemon";
    let data = await fetch(url);
    let parsed = await data.json();
    console.log(parsed.results);
    this.setState({ item: parsed.results });
    
  }
  render() {
    return (
      <div className="main">
      <div className="search">
      <input type="text" placeholder="Search pokemon" onChange={(e)=>this.setState({searchInput: e.target.value})} />
    </div>
    <div className="box"> 
      {this.state.item.filter((elem)=>{
        return this.state.searchInput.toLowerCase() === '' ? elem : elem.name.toLowerCase().includes(this.state.searchInput);
      })
      .map((elem,index)=>{
          return <div className="card">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${index+1}.png`} width={"200px"}/>
            
            <p className="name">{elem.name}</p>
          </div>;
      })
      }
   </div>
  </div>
    );
  }
}

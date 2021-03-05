import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React from 'react';
let checklist = [
  {
    completed: false,
    description: "Star Wars: The Empire Strikes Back",
    genre: "Sci-Fi",
  },
  {
    completed: false,
    description: "The Hobbit",
    genre: "Fantasy",
  },
  {
    completed: false,
    description: "How to Train Your Dragon",
    genre: "Fantasy",
  },
  {
    completed: false,
    description: "Ready Player One",
    genre: "Sci-Fi"
  },
  {
    completed: false,
    description: "Avengers: End Game",
    genre: "SuperHero",
  },
  {
    completed: false,
    description: "Captain America: Civil War",
    genre: "SuperHero",
  },
]

let newList = [
  {
    completed: false,
    description: "Iron Man 3",
    genre: "SuperHero",
  },
  {
    completed: false,
    description: "The Lord of the Rings: Return of the King",
    genre: "Fantasy",
  },
  {
    completed: false,
    description: "How to Train Your Dragon 3",
    genre: "Fantasy",
  },
  {
    completed: false,
    description: "Watchlist is full",
    genre: "none",
  },
]

class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      checklist,
      newList
    }
  }
  
  addMovie = () =>{
    this.setState(prevState =>(
      {
        checklist: [...prevState.checklist,
          {completed: false, description: "IronMan"}]
      }
    ))
  }

  render(){
  return (
    <>
      <h1>My Watchlist</h1>
      {this.state.checklist.map((item) => (
        <div>
          <label>
          <input type = "checkbox" defaultChecked = {item.completed}></input>
          {item.description}
          </label>
        </div>
      ))}
      <button onClick = {() =>this.addMovie()}>Add a Movie</button>
    </>
  );
  }
}

export default App;

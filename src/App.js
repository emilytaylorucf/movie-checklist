import logo from './logo.svg';
import './App.css';
let checklist = [
  {
    completed: true,
    description: "Star Wars: The Empire Strikes Back",
  },
  {
    completed: true,
    description: "The Hobbit",
  },
  {
    completed: true,
    description: "How to Train Your Dragon",
  },
  {
    completed: true,
    description: "Ready Player One",
  },
  {
    completed: true,
    description: "Avengers: End Game",
  },
  {
    completed: true,
    description: "Captain America: Civil War"
  },
]
function App() {
  return (
    <>
      <h1>My Watchlist</h1>
      {checklist.map((item) => (
        <div>
          <input type = "checkbox"></input>
          <span>{item.description}</span>
        </div>
      ))}
    </>
  );
}

export default App;

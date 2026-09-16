// import logo from './logo.svg';
// import './App.css';
import Greeting from './Greeting';

function App() {

  // logic
  // 구조분해할당 - object destructuring
  const animals = ["dog", "cat", "pig"];
  // const second = animals[1];

  const [ first, second ] = animals
  // console.log("🚀 ~ App ~ first:", first)
  // console.log("🚀 ~ App ~ second:", second)

  const todoItems = {
    todo: "react학습하기",
    iscomplete: false
  }

  const {todo: todoName, iscomplete} = todoItems;
  // console.log("🚀 ~ App ~ iscomplete:", iscomplete)
  // console.log("🚀 ~ App ~ todoName:", todoName)

  // view
  return (
    <div className="App">
      Hello World
      <Greeting/>
    </div>
  );
}

export default App;

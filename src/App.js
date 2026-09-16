// import logo from './logo.svg';
// import './App.css';
import Card from './components/Card';
import Greeting from './components/Greeting';

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

  const handleButtonClick = (itemName) => {
    console.log(itemName);
  }

  // view
  return (
    <div className="App">
      Hello World
      {/* <Greeting/> */}
      <Card imgUrl={"https://cf.product-image.s.zigzag.kr/original/d/2026/9/3/3642_202609031726294504_44907.gif?width=400&amp;height=400&amp;quality=80&amp;format=webp&amp;transparent=true"} 
      itemName={"지그재그 이미지"}
      onButtonClick={handleButtonClick}/>
      <Card imgUrl={"https://cf.product-image.s.zigzag.kr/original/d/2026/9/14/7416_202609141645490632_49890.gif?width=400&amp;height=400&amp;quality=80&amp;format=webp&amp;transparent=true"} 
      itemName={"지그재그 이미지2"}
      onButtonClick={handleButtonClick}/>
    </div>
  );
}

export default App;

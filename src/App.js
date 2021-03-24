// import './App.css';

function Food({value, color}) {
  // NOTE:: props.name == { name }
  // console.log(props);
  // console.log(props.name);

  return (
    <div>
      <h3>나이가 들면 <span style={{color: color}}>{value}</span>가 맛있어 진대여..</h3>
    </div>
  );
}

const FoodList = [
  {
    value: "가지",
    color: "purple"
  },
  {
    value: "당근이",
    color: "orange"
  },
  {
    value: "피망이",
    color: "green"
  },
];

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Food value="가지" />
      <Food value="당근" />
      <Food value="피망이" />

      { FoodList.map(item => (<Food value={item.value} color={item.color} />)) }
    </div>
  );
}

export default App;

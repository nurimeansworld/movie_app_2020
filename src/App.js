// import './App.css';

function Food({value}) { // props.name == { name }
  // console.log(props);
  // console.log(props.name);
  
  return (
    <h3>나이가 들면 {value}가 맛있어 진대여..</h3>
  );
}

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Food value="가지" />
      <Food value="당근" />
      <Food value="피망이" />
    </div>
  );
}

export default App;

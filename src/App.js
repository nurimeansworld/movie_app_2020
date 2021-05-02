// import './App.css';
import PropTypes from "prop-types";

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

Food.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.string,
  color: PropTypes.number
};


const FoodList = [
  {
    id : 1,
    value: "가지",
    color: "purple",
  },
  {
    id : 2,
    value: "당근이",
    color: "orange",
  },
  {
    id : 3,
    value: "피망이",
    color: "green",
  },
];

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Food value="가지" />
      <Food value="당근" />
      <Food value="피망이" />

      { FoodList.map(item => (
      <Food value={item.value} color={item.color} />
      ))}
    </div>
  );
}

export default App;

// import './App.css';
import React from "react";
import PropTypes from "prop-types";
class App extends React.Component{

  state = {
    value: '가지'
  };

  carrot = () => {
    // setState() : render()를 호출하면서 state 변경
    this.setState({value: '당근이'});
  };
  addCarrot = () => {
    // current로 현재 데이터를 바탕으로 실행
    this.setState(current => ({value: current.value + '당근이'}));
  };
  pimento = () => {
    this.setState({value: '피망이'});
  };

  // renter() : 자동적으로 class component의 render 실행
  render() {
    return (
      <div>
        <h1>나는 {this.state.value}다.</h1>
        <button onClick={this.carrot}>당근이</button>
        <button onClick={this.addCarrot}>당근이더하기</button>
        <button onClick={this.pimento}>피망이</button>
      </div>
    );
  }
}

export default App;

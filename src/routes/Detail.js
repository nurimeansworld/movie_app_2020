import React from "react";

// function Detail(props){
//   console.log(props);
//   return <span>Detail</span>;
// }

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if(location.state) {
      return (
        <div className="movie__data">
          <h3 className="movie__title">{location.state.title}</h3>
          <h3 className="movie__year">{location.state.year}</h3>
          <p className="movie__summary">{location.state.summary}</p>
        </div>
      );
    }else {
      return null;
    }
  }
}

export default Detail;
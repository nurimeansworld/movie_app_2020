import React from "react";
import {Link} from "react-router-dom";

import "./Navigation.css";

function Navigation() {
  return (
    <div>
      {/* a 태그로 설정하면 페이지 리로드 */}
      {/* <a herf="/">Home</a>
      <a href="/about">About</a> */}

      {/* Link로 설정 */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
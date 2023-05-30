import * as React from "react";

import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {" "}
      <Link to="/">
        <h1 style={{ textAlign: "center" }}>News Corp React Code Challenge</h1>
      </Link>
    </>
  );
}

export default Header;

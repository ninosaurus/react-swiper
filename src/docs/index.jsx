import React from "react";
import { render } from "react-dom";
import ReactRaty from "./../lib";
import "./styles.css";

function Demo() {
  return (
    <div>
      <h1>Demo with examples of the component</h1>
      <ReactRaty/>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));

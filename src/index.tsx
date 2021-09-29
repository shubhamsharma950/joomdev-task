import React, {FC} from "react";
import ReactDOM from "react-dom";
import Img from "./images/img1.jpg";
import "./styles.scss";

const App: FC = () => {
  return(
    <div>
      <h1>Welcome This is my first React Code with webpack & Babel</h1>
      <img src={Img} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
import * as React from "react";
import { render } from "react-dom";
import AuthContext from "./auth/auth.context";
import "./styles.css";

function App() {
  // Get authContext
  const authContext = React.useContext(AuthContext);

  return (
    <div className="App">
      <h1>Context API example</h1>
      <div>{JSON.stringify(authContext)}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Header from "./components/header";
import Content from "./components/content";

function App() {
  return (
    <Fragment>
      <Header name="Christophe" icon="cloud"/>
      <Content />
    </Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

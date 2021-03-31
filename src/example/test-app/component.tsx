import React from "react";
import { render } from "react-dom";
import { TestComponent } from "../../components/test-component/component";

const App = () => <TestComponent />;
render(<App />, document.getElementById("root"));

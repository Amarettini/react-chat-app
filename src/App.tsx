import { FunctionComponent } from "react";
import { createRoot } from "react-dom/client";

const App: FunctionComponent = () => {
  return <p>Hello World!</p>;
};

const container = document.getElementById("root");
if (!container) {
  throw new Error("Missing root mounting point in DOM");
}
const root = createRoot(container);
root.render(<App />);

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { navbar } from "./utils/navbar";
import Layout from "./components/Layout/layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {navbar.map((item, index) => (
            <Route key={index} path={item.path} element={item.element} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

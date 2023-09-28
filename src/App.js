import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />

        <Route path="/cart" exact element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

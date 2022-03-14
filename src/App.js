// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// material components
import { Container } from "@material-ui/core"

// components
import { CartAppBar } from './components'

// view
import { CardPageRow, CategorySummary, ProductPage } from "./views";

// styles
import './index.css';

function App() {
  sessionStorage.clear()
  sessionStorage.setItem("cart", JSON.stringify([]));
  return (
    <Router>
      <Container>
        <CartAppBar />
        <Routes>
          <Route path="/" exact="true" element={<CardPageRow />} />
          <Route path="/categories/:category" exact="true" element={<CategorySummary />} />
          <Route path="/products/:id" exact="true" element={<ProductPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

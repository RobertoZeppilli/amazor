// material components
import { Container } from "@material-ui/core"

// components
import { CartAppBar } from './components'

// view
import { CardPageRow } from "./views";

// styles
import './index.css';

function App() {
  return (
    <Container>
      <CartAppBar />
      <CardPageRow />
    </Container>
  );
}

export default App;

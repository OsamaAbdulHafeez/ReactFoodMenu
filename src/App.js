import logo from './logo.svg';
import './App.css';
import './Components/Main.css'
import './Components/responsive.css'
import Header from './Components/header';
import FoodList from './Components/FoodList';
import { OrderNow } from './Components/OrderNow';

function App() {
  return (
    <div className="App">
      <Header />
      <FoodList />
      <OrderNow />
    </div>
  );
}

export default App;

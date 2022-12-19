import './App.css';
import Products from './containers/Products';
import Login from './containers/Login';
import Register from './containers/Register';
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{faHeart} from "@fortawesome/free-solid-svg-icons";
import { Routes, Route, BrowserRouter} from 'react-router-dom';
function App() {
  return (

    <BrowserRouter> 
    <Routes>
        <Route path="/products" element={ <Products/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/" element={ <Login/> } />
      </Routes>
      </BrowserRouter>
 
  );
}
export default App;

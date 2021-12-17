import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from './pages/About/About';
import AllProducts from './pages/AllProducts/AllProducts';
import Contact from './pages/ContactUs/Contact';
import ProductDetails from './pages/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home></Home>}>
          </Route>

          <Route path='aboutUs' element={<About></About>}>
          </Route>

          <Route path='allProducts' element={<AllProducts></AllProducts>}>
          </Route>

          <Route path='contact' element={<Contact></Contact>}>
          </Route>

          <Route path='product/:id' element={<ProductDetails></ProductDetails>}>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

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
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome';
import ManageAllOrder from './pages/Dashboard/ManageAllOrder/ManageAllOrder';
import AddProduct from './pages/Dashboard/AddProduct/AddProduct';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageProduct from './pages/Dashboard/ManageProduct/ManageProduct';
import Payment from './pages/Dashboard/Payment/Payment';
import MyOrders from './pages/Dashboard/MyOrders/MyOrders';
import Phone from './pages/Home/NewProducts/Phone/Phone';
import Laptop from './pages/Home/NewProducts/Laptop/Laptop';
import Mirophone from './pages/Home/NewProducts/Mircophone/Mirophone';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Home></Home>}>
              <Route path='phone' element={<Phone></Phone>}></Route>
              <Route path='laptop' element={<Laptop></Laptop>}></Route>
              <Route path='microphone' element={<Mirophone></Mirophone>}></Route>
            </Route>

            <Route path='aboutUs' element={<About></About>}>
            </Route>

            <Route path='allProducts' element={<AllProducts></AllProducts>}>
            </Route>

            <Route path='contact' element={<Contact></Contact>}>
            </Route>

            <Route path='login' element={<Login></Login>}>
            </Route>

            <Route path='register' element={<Registration></Registration>}>
            </Route>

            <Route path='product/:id' element={<ProductDetails></ProductDetails>}>
            </Route>
            {/* Dashboard and nested Route*/}
            <Route path='dashboard' element={<DashboardHome></DashboardHome>}>
              <Route path='manageAllOrder' element={<ManageAllOrder></ManageAllOrder>}></Route>
              <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
              <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
              <Route path='manageProduct' element={<ManageProduct></ManageProduct>}></Route>
              <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
              <Route path='payment' element={<Payment></Payment>}></Route>
            </Route>

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;

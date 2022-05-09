import './App.css';
import Header from './Components/Shared/Header/Header';
import Home from './Components/Home/Home/Home'
import About from './Components/About/About'
import Blogs from './Components/Blogs/Blogs'
import Login from './Components/Login/Login/Login'
import ManageInventory from './Components/ManageInventory/ManageInventory'
import CarsDetails from './Components/CarsDetails/CarsDetails'
import {Route, Routes} from 'react-router-dom'
import MyDeleveryItems from './Components/MyItems/MyItems';
import Footer from './Components/Shared/Footer/Footer';
import Contents from './Components/Home/Contents/Contents';
import Register from './Components/Login/Register/Register';
import RequireAuth from './Components/Login/RequireAuth/RequireAuth';
import AddCars from './Components/AddCars/AddCars';
import { ToastContainer } from 'react-toastify';
import NotFound from './Components/Shared/NotFound/NotFound';
function App() {
  return (
    <div>
      <Header></Header>
      
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/car/:carId' element={
          <RequireAuth>
            <CarsDetails></CarsDetails>
          </RequireAuth>
          }></Route>
          <Route path='/about' element={<About></About>}></Route>
          
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/manage' element={
            <RequireAuth>
              <ManageInventory></ManageInventory>
            </RequireAuth>
          }></Route>
          <Route path='/contents' element={<Contents></Contents>}></Route>
          <Route path='/MyDeleveryItems' element={
            <RequireAuth>
              <MyDeleveryItems></MyDeleveryItems>
            </RequireAuth>
          
          }></Route>
          <Route path='/addcars' element={
          <RequireAuth>
            <AddCars></AddCars>
          </RequireAuth>
          }></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
      
    </div>
  );
}

export default App;

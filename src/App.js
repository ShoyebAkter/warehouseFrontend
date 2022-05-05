import './App.css';
import Header from './Components/Shared/Header/Header';
import Home from './Components/Home/Home/Home'
import About from './Components/About/About'
import Blogs from './Components/Blogs/Blogs'
import Login from './Components/Login/Login/Login'
import ManageInventory from './Components/ManageInventory/ManageInventory'
import CarsDetails from './Components/CarsDetails/CarsDetails'
import {Route, Routes} from 'react-router-dom'
import MyItems from './Components/MyItems/MyItems';
import NotFound from './Components/Shared/NotFound/NotFound';
import Footer from './Components/Shared/Footer/Footer';
import Content from './Components/Home/Content/Content';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/manageinventory' element={<ManageInventory></ManageInventory>}></Route>
          <Route path='/content' element={<Content></Content>}></Route>
          <Route path='/myitems' element={<MyItems></MyItems>}></Route>
          <Route path='/carsdetails/:id' element={<CarsDetails></CarsDetails>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

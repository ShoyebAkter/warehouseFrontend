import { Route, Routes } from 'react-router-dom';
import './App.css';
import Headers from './Components/Headers/Headers';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login/Login';
import RequireAuth from './Components/Login/RequireAuth/RequireAuth';



function App() {
  return (
    <div>
      <Headers></Headers>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            {/* <Checkout></Checkout> */}
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;

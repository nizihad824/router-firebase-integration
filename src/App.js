import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/products'
         element={<RequireAuth>
           <Products></Products>

         </RequireAuth>

         }></Route>
        <Route 
        path='/orders' 
        element={
        <RequireAuth>
          <Orders></Orders>
        </RequireAuth>}></Route>
      </Routes>

     
    </div>
  );
}

export default App;

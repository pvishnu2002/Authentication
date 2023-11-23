// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Login from './Component/Login';
import Error from './Component/Error';
import { Route,Routes } from 'react-router-dom';
import Detail from './Component/Detail';
import UserData from './Component/UserData';

function App() {
  
  return (
    <div className="App">
     <Header />
     <Routes>
        <Route path = "/" element={<Home />}></Route> 
        <Route path = "/login" element={<Login />}></Route>
        <Route path = "/detail" element={<Detail />} ></Route>
        <Route path = "/user" element={<UserData />} ></Route>
        <Route path = "*" element={<Error />} ></Route>

     </Routes> 
     
    </div>
  );
}

export default App;

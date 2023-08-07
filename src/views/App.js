import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/MyComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './example/Home';
import ListUsers from './users/ListUsers';
import DetailUser from './users/DetailUser';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/todo" element={<ListTodo />}></Route>
            <Route path="/about" element={<MyComponent/>}></Route>
            <Route path='/user' exact element={<ListUsers />}></Route>
            <Route path='/user/:id' element={<DetailUser />}></Route>
          </Routes>  
        </header>


        
        
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

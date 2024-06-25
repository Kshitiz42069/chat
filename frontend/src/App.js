import { Route, Routes, Navigate } from 'react-router-dom';
import Login from "./Components/Auth/Login";
import Register from './Components/Auth/Register';
import Chat from './Components/Page/Chat';
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from './context/authContext';


function App() {
  const {authUser} = useAuthContext();
  return (
    <div>

      <div className="App">
        <Routes>
          <Route path='/' element={
            authUser ? <Navigate to={'/chat'}/> : <Login/>
          }/>
          <Route path='/register' element={
            authUser ? <Navigate to={'/chat'}/> : <Register/>
          }/>
          <Route path='/chat' element={
            authUser ?  <Chat/> : <Navigate to={'/'}/>
          }/>
        </Routes>
      </div>
    <Toaster/>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Components/Auth/Login";
import Register from './Components/Auth/Register';
import Chat from './Components/Page/Chat';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={
            <div>
              <Login/>
            </div>
          }/>
          <Route path='/register' element={
            <div>
              <Register/>
            </div>
          }/>
          <Route path='/chat' element={
            <>
              <Chat/>
            </>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

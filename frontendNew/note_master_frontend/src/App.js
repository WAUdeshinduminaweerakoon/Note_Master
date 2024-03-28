
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Components/Signup';
import SignIn from './Components/SignIn';
import Notes from './Components/Notes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/SignIn' element={<SignIn/>}></Route>
        <Route path='/Notes' element={<Notes/>}></Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;

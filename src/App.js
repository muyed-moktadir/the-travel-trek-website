import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/Shared/NotFound/NotFound';
import Services from './pages/Home/Services/Services';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;

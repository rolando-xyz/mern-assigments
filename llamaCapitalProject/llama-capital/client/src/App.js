import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Navigation from './components/Navigation';
import CreateUser from './views/CreateUser';
import UserLogin from './views/UserLogin';
import Dashboard from './views/Dashboard';
import Currency from './views/Currency';
import Trade from './components/Trade';
import CoinSlider from './components/CoinSlider';
import CoinInfo from './components/CoinInfo';

const BadLink = () => {
  return( <div className="container text-center text-danger mt-4"><h1 className="display-6">the ROUTE you attempted to travel was blocked by an unknown celestial event</h1></div> )
}

function App() {
  return (
    <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Main />} />
          <Route path='/user/new' element={<CreateUser />} />
          <Route path='/user/login' element={<UserLogin />} />
          <Route path='/trade' element={<Trade />} />
          <Route path='/user/dashboard' element={<Dashboard />} />
          <Route path='/singleCurrency/:id' element={<Currency />} />
          <Route path='*' element={<BadLink />} />
        </Route>
      </Routes>
  )
}

export default App
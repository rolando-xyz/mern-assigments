import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Navigation from './components/Navigation';
import CreateUser from './views/CreateUser';
import UserLogin from './views/UserLogin';
import Dashboard from './views/Dashboard';
import Currency from './views/Currency';
import Index from './views/Index';

const BadLink = () => {
  return( <div className="container text-center text-danger mt-4"><h1 className="display-6">the ROUTE you attempted to travel was blocked by an unknown celestial event</h1></div> )
}

function App() {
  return (
    <Routes>
        <Route path='/' element={<Index />}>
          <Route index element={<Main />} />
          <Route path='*' element={<BadLink />} />
        </Route>
        <Route path='/user' element={<Navigation />}>
          <Route index element={<Main />} />
          <Route path='/user/new' element={<CreateUser />} />
          <Route path='/user/login' element={<UserLogin />} />
          <Route path='/user/dashboard' element={<Dashboard />} />
          <Route path='/user/singleCurrency/:id' element={<Currency />} />
          <Route path='*' element={<BadLink />} />
        </Route>
      </Routes>
  )
}

export default App
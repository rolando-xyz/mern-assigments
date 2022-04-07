import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import CreateProduct from './components/CreateProduct';
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';
import DeleteProduct from './components/DeleteProduct'
import Container from './views/Container';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Container />}/>
      <Route path='/product/:id' element={<OneProduct />}/>
      <Route path='/product/update/:id' element={<EditProduct />} />
      <Route path='/product/delete/:id' element={<DeleteProduct />}/>
    </Routes>
  );
}

export default App;

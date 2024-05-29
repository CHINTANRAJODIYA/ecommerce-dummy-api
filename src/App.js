import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dummyapi from './dummyapi';
import Prodetail from './Prodetail';
import Cart from './Cart';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <>
      <Provider store={store}>
      <Routes>
        <Route path='/' element={<Dummyapi />}></Route>
        <Route path='/product/:id' element={<Prodetail />}></Route>
        <Route path='/cart/' element={<Cart />}></Route>
      </Routes>
      </Provider>
    </>
  );
}

export default App;

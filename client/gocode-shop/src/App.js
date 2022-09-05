import './App.css';
import Header from './components/Header';
import Products from './components/Products';
// import Test1 from './components/Test1';
import React from 'react'
// import Loading from './components/Loading';
// import MyContext from './MyContext';

function App({ addProductToCart }) {



  return (
    <div className="App">
      {/* <Loading /> */}

      <Header />
      <Products addProductToCart={addProductToCart} />
    </div>
  );
}

export default App;

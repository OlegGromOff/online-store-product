import React from 'react';
import logo from './assets/img/logo.svg';
import './App.css';
import Product from './components/product';
import dc1 from './assets/img/dc1.jpg';
import ck from './assets/img/ck.jpg';
import kl from './assets/img/kl.jpg';
import dc2 from './assets/img/dc2.jpg';

function App() {
  return (
    <div className="App ">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Мужские головные уборы
        </h1>

      </header>
      <body className="width-wrapper">
        <div className="product">
          <div className="product-menu">
            <ul className="product-menu__list">
              <li>
                <span>Головные уборы</span>
              </li>
            </ul>
          </div>
          <div className="product-list">
            <Product img={dc1} alt='Бейсболка' price='684' brand='DC Shoes' description='Бейсболка зеленая с логотипом DC' amount='5' />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;

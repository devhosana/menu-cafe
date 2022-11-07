import './App.css';
import React from "react";

import menu from "../src/menu.js";

import AppHeader from './components/AppHeader';
import SubHeading from './components/SubHeading';
import MenuDescription from "./components/MenuDescription";
import MenuItem from './components/MenuItem';

// Não esquecer de preparar códigos QR para impressão
// Deixar logo e preçario como fixed e apenas menu como scrollable
// colocar ícones como fundo em cada submenu (hamburguer, cerveja, etc)


function App() {
  return (
    <div className="App">
      <header className="header">
        <AppHeader/>
        <SubHeading/>
      </header>

      <main>
        {
          menu.map((element) => {

            return (
              <div className = "menu__division" key={Math.random()}>
                {/* Primeiro renderizar títulos dos sub-menus */}
                <MenuDescription
                  title={element.menuTitle}
                  key={Math.random()}
                />

                {/* Segundo renderizar conteúdo dos items */}
                <div className = "items__wrapper">
                  {
                    element.content.map(item => {
                      return (
                        <MenuItem
                          price={item.price}
                          name={item.name}
                          auxiliaryText={item.auxiliaryText}
                          key={Math.random()}
                        />
                      );
                    })
                  }
                </div>
              </div>
            )

          })
        }
      </main>

      <footer>
        <p>Developed by</p>
        <a
          href={"https://www.hosana.dev"}
          className="footer__link"
          rel="noreferrer"
          target="_blank"
        >hosana.dev</a>
      </footer> 
      
    </div>
  );
}

export default App;

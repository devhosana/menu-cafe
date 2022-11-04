import './App.css';
import React from "react";

import menu from "../src/menu.js";

import AppHeader from './components/AppHeader';
import SubHeading from './components/SubHeading';
import MenuDescription from "./components/MenuDescription";
import MenuItem from './components/MenuItem';


// Parei aqui, falta resolver erro de key
// adicionar preçario de ingredientes extras
// e consertar número dos itens
// quem sabe mover titulo do submenu para direita
// Deixar logo e preçario como fixed e apenas menu como scrollable
// colocar ícones como fundo em cada submenu (hamburger, cerveja, etc)
// colocar link para hosana.dev no final

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
              <div className = "menu__division">
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
      
    </div>
  );
}

export default App;

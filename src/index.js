import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import ItemStore from './store/ItemStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));


// Создаем класс userstore и кидаем его контекст в дочернии классы
root.render(

  <React.StrictMode>
    
    <Context.Provider value={{
        user: new UserStore(),
        item: new ItemStore()
      }}>
      <App />
    </Context.Provider>

  </React.StrictMode>

);

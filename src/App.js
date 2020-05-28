import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  render() {
    return  (
      <div className="main-container">
        <header className="navbar-search">
          <form>
            <input name="userSearch" placeholder="Usuário" className="form-input"/>
            <button type="submit"></button>
          </form>
        </header>
        <section>

        </section>
      </div>
    )
  }
}

export default App;

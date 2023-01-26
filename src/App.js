import React from 'react';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// MY TO DO TASKS
// 3. download cv for personal use.

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header title="cv creator" />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

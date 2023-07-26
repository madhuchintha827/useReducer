import React from "react";
import CounterOne from "./components/CounterOne";



function App() {
  return (
    <React.Fragment>
      <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
        <a href="/" className='navbar-brand'>React Hooks UseReducer</a>
      </nav>

      <CounterOne/>
    </React.Fragment>
    
  );
}

export default App;

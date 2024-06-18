// Styles
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import PageLogin from './pages/PageLogin';
import PageTable from './pages/PageTable';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <PageLogin /> }/>
          <Route path='/produtos' element={ <PageTable /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

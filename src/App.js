import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React, { Suspense } from 'react';
import AppConfig from './app-config';

const Counter = React.lazy(() => import("./lib-counter"));
const MainPage = React.lazy(() => import("./lib-main-page"));

function App() {
  return (
    <div className="App">

      <h1>The api url is {AppConfig.API_URL}</h1>

      <a href='/'>Main Page</a>
      <a href='/counter'>Counter</a>

      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<MainPage></MainPage>}></Route>
            <Route path="/counter" element={<Counter></Counter>}></Route>
          </Routes>
        </Suspense>
      </Router>

    </div>
  );
}

export default App;

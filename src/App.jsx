import React from 'react';

import HomePage from './pages/HomePage';
import MainPage from './pages/Mainpage/MainPage';

function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <MainPage>
        <HomePage />
      </MainPage>
    </div>
  );
}

export default App;

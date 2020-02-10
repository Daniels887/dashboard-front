import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';

export const RouteContext = React.createContext();

function App() {
  function goBack(history) {
    history.goBack();
  }

  return (
    <>
      <RouteContext.Provider value={goBack}>
        <Routes />
      </RouteContext.Provider>
      <GlobalStyle />
    </>
  );
}

export default App;

import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { ToastContainer } from 'react-toastify';

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
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import ReduxStore from './Scripts/ReduxStore'


const GlobalStyle = createGlobalStyle`
  :root {
    --theme-primary: linear-gradient(90.09deg, #085c94 1.84%, #1494A7 102.67%);
    --theme-white: linear-gradient(90.09deg, #FDFCFB 1.84%, #E2D1C3 102.67%);


    --gradient-text:linear-gradient(90.09deg, #085c94 1.84%, #1494A7 102.67%);
    --gradient-button:linear-gradient(90.09deg, #1494A7 1.84%, #085c94 102.67%);

    --color-background: #E9EDEE;
    --color-footer:#fff;
    --color-blog:#042c54;
    --color-text:#1494A7;
    --color-subtext:#FF8A71;
    --primary-color: #085c94;
    --secondary-color: #1494A7;
    --ternary-color: #E9EDEE;

  }
`;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ReduxStore}>
    <GlobalStyle/>
    <App />
  </Provider>
);

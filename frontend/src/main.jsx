import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import {Provider} from "react-redux";
import {store} from "./redux/store.js";
import { HelmetProvider } from 'react-helmet-async';
import App from "./App.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <App/>
      </Provider>
    </HelmetProvider>
  </StrictMode>,
)

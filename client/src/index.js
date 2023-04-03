import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import reduxStore from './redux'

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const { store, persistor } = reduxStore()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <BrowserRouter>
            <App source="https://api.github.com/users/octocat/gists" />
         </BrowserRouter>
      </PersistGate>
   </Provider>
)

reportWebVitals()

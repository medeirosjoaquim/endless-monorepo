import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { createConsumer } from '@rails/actioncable'

createConsumer('ws://localhost:3000/cable').subscriptions.create(
  { channel: 'PodcastChannel' },
  {
    received(data: any) {
      alert("done" + JSON.stringify(data))
    },
  }
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)

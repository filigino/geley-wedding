import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import 'index.css'
import reportWebVitals from 'reportWebVitals'

import { CivilWedding } from 'pages/CivilWedding/CivilWedding'
import { SaveTheDate } from 'pages/SaveTheDate/SaveTheDate'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<SaveTheDate />} />
        <Route path="/civil-wedding" element={<CivilWedding />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

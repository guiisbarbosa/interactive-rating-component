import './preset.css'
import Rating from "./components/Rating"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Result from './components/Result'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Rating />} />
          <Route path="/result/:selectedResult" exact element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

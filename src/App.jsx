import { useState } from 'react'
import './App.css'
import { Header } from './header.jsx'

import {Body} from "./Body.jsx";

function App() {
    const [page, setPage] = useState("AboutUs")

  return (
    <>
        <Header setPage={setPage}></Header>
        <Body currentPage={page}></Body>
    </>
  )
}

export default App

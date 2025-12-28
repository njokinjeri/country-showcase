import {Routes, Route} from "react-router";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail"

export default function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/country/:name" element={<CountryDetail />}></Route>
        </Routes>
    </>
  )
}


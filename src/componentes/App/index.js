import {BrowserRouter, Routes, Route} from "react-router-dom";

import MovieSelection from "../Movie";
import Header from "../Utils/Header";


function App(){
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MovieSelection/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;


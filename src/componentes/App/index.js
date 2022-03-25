import {BrowserRouter, Routes, Route} from "react-router-dom";

import SessionSelection from "../Session";
import MovieSelection from "../Movie";
import Header from "../Utils/Header";


function App(){
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MovieSelection/>}></Route>
                <Route path="/sessions/:idMovie" element={<SessionSelection/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;


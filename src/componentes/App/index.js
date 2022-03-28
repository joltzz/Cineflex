import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";

import ReceiptPage from "../Receipt";
import SeatSelection from "../Seats/SeatSelection";
import SessionSelection from "../Session";
import MovieSelection from "../Movie";
import Header from "../Utils/Header";


function App(){

    const [movieDetails, setMovieDetails]=useState({})

    function updateMovieDetails(currentDetails, sessionId, details){
        setMovieDetails(details={...currentDetails, sessionId:sessionId})
    }

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MovieSelection/>}></Route>
                <Route path="/sessions/:idMovie" element={<SessionSelection/>}></Route>
                <Route path="/seats/:idSession" element={<SeatSelection confirmSend={updateMovieDetails}/>}></Route>
                <Route path="/receipt" element={<ReceiptPage confirmSend={movieDetails} />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;


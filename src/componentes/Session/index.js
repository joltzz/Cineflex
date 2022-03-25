import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import Footer from "../Utils/Footer";

import "./SessionSelection.css"
import Loading from "../../assets/img/loading.svg";


function SessionSelection() {
    const [movie, setMovie] = useState([])
    const { idMovie } = useParams();

    let { days } = movie;

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`);

        promise.then(response => {
            setMovie(response.data);
        });
    }, [idMovie]);


    if (movie.length === 0) {
        return (
            <div className="Loading">
                <img src={Loading} alt="" />
                <h1>Carregando...</h1>
            </div>
        )
    }

    return (
        <main className="time-selection-page">
            <div className="title-page">
                <span className="title">Selecione o horário</span>
            </div>
            <div className="content">
                <div className="container">
                    {days.map(session => (
                        <div className="date">
                            <h1>{session.weekday} - {session.date}</h1>
                            <div className="hours">
                                {session.showtimes.map(session =>
                                    <Link to={`/seats/${session.id}`} className="link">
                                        <p className="hours-box">{session.name}</p>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer src={movie.posterURL}
                alt={movie.title}
                title={movie.title}
            />
        </main>
    );
}

export default SessionSelection;

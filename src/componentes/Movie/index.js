import {useState} from "react";
import {Link} from "react-router-dom";

import Loading from "../../assets/img/loading.svg";

import "./Movie.css"

function MovieSelection(){
    const [movies, setMovies]= useState([]);

    //Preencher o array de filmes com a API dos filmes que virao do axios

    if(movies.length===0){
        return (
           <div className="loading">
                <img src={Loading}/>
                <h1>Carregando...</h1>
            </div> 
        )
    }

    return (
        <main className="movie-selection-page">
            <div className="title-page">
                <span className="title">Selecione o filme</span>
            </div>
            <div className="content">
                <Link to={a}>
                    <div className="container">
                        <img src="" alt=""/>
                    </div>
                </Link>
            </div>
        </main>
    )
}

export default MovieSelection;

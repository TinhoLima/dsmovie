import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

type Props = {
    movie: Movie;
}

function MovieCard( { movie } : Props) {
    
    return (
        <div>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <h3><Skeleton/></h3>
                <MovieScore count={movie.count} score={movie.score} />
                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-warning dsmovie-btn">Avaliar</div>
                </Link>
                
            </div>
            </SkeletonTheme>
        </div>
    );
}

export default MovieCard;
import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import { useState, useEffect } from "react";
import { MoviePage } from "types/movie";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`).then(resposta => {
            const data = resposta.data as MoviePage;
            setPage(data);
        })
    }, [pageNumber]);

    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    return (
        <>
            <SkeletonTheme baseColor="#7a7a7a" highlightColor="#fff">
                <Pagination page={page} onChange={handlePageChange} />

                <div className="container">
                    <div className="row">
                        <Skeleton count={5} height={300} />
                        {page.content.map(movie => (
                            <div key={movie.id} className="col-sm-5 col-lg-3 col-x1-2 mb-3">
                                <MovieCard movie={movie} />
                            </div>
                        )
                        )}

                    </div>
                </div>

                <Pagination page={page} onChange={handlePageChange} />
            </SkeletonTheme>
        </>
    )

}
export default Listing;
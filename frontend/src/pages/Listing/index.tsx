import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import { useState, useEffect } from "react";
import { MoviePage } from "types/movie";
import 'react-loading-skeleton/dist/skeleton.css'
import ComponentSkeleton from '../../components/Skeleton'

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);
    const [loading, setLoading] = useState(true);

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
            setLoading(false);
        })
    }, [pageNumber]);

    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    return (
        <>
            <Pagination page={page} onChange={handlePageChange} />

            {loading && <ComponentSkeleton />}
            {!loading &&

                <div className="container">
                    <div className="row">
                        {page.content.map(movie => (
                            <div key={movie.id} className="col-sm-5 col-lg-3 col-x1-2 mb-3">
                                <MovieCard movie={movie} />
                            </div>
                        )
                        )}

                    </div>
                </div>
            }

            <Pagination page={page} onChange={handlePageChange} />
        </>
    )

}
export default Listing;
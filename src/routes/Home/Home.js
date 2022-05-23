import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Movie from "../../components/Movie/Movie";
import styles from "./Home.module.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [reloding, setReloading] = useState(true);
  let { page } = useParams();
  page = page === undefined ? "1" : page;

  const pages = [...Array(10)].map((v, index) => index + 1);

  const getMovies = async () => {
    const json = await (
      await axios.get(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year&page=${page}`
      )
    ).data;
    setMovies(json.data.movies);
    setReloading(false);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getMovies();
  }, [page]);

  console.log(movies);

  return (
    <div className={styles.container}>
      {loading ? (
        <h2 className={styles.loading}>Loading...</h2>
      ) : (
        <Fragment>
          <div className={styles.movieList}>
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                genres={movie.genres}
                rating={movie.rating}
              />
            ))}
          </div>
          <div className={styles.pageList}>
            {pages.map(item => (
              <Link
                to={`/${item}`}
                key={item}
                className={`${styles.page} ${
                  item === +page ? styles.focus : null
                }`}
                onClick={() => setReloading(true)}
              >
                {item}
              </Link>
            ))}
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default Home;

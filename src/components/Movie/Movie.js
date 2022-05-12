import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.scss";

function Movie({ id, coverImg, title, year, summary, genres, rating }) {
  return (
    <Link to={`/movie/${id}`} className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.cover} />
      <div className={styles.details}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.year}>{year}</span>
        <p className={styles.summary}>
          {summary.length > 250
            ? `${summary
                .slice(0, 250)
                .replaceAll("&#39;", "'")
                .replaceAll("&quot;", '"')}...`
            : summary.replaceAll("&#39;", "'").replaceAll("&quot;", '"')}
        </p>
        <ul className={styles.genres}>
          {genres.map(genre => (
            <li key={genre} className={styles.genre}>
              {genre}
            </li>
          ))}
        </ul>
        <div className={styles.details__bottom}>
          <span
            className={`${styles.rating} ${
              rating >= 9
                ? styles.score__very_high
                : rating >= 8
                ? styles.score__high
                : rating >= 7
                ? styles.score__mid
                : styles.score__low
            }`}
          >
            {rating}
          </span>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;

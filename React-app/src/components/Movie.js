import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie/Movie.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cover}>
        <img src={coverImg} alt={title} />
      </div>
      <div className={styles.details}>
        <h2 className={styles.title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p className={styles.summary}>
          {summary.length > 400
            ? `${summary
                .replaceAll("&#39;", "'")
                .replaceAll("&quot;", '"')
                .substring(0, 400)}...`
            : summary.replaceAll("&#39;", "'").replaceAll("&quot;", '"')}
        </p>
        <ul>
          {genres.map(genre => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;

import styles from "./MovieDetail.module.scss";
import PropTypes from "prop-types";

function MovieDetail({
  title,
  cover,
  bgImage,
  year,
  description,
  genres,
  like,
  rating,
  runtime,
  youtube,
}) {
  const imageLoaded = () => {
    document
      .getElementsByClassName(styles.movieDetail)[0]
      .classList.add(styles.loaded);

    document
      .getElementsByClassName(styles.loading)[0]
      .classList.add(styles.loaded);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.loading}>Loading...</h2>
      <div className={styles.movieDetail}>
        <div className={styles.detail__cover}>
          <img
            src={bgImage}
            className={styles.bgImage}
            alt={title}
            onLoad={imageLoaded}
          />
          <img src={cover} className={styles.cover} alt={title} />
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div className={styles.detail__details}>
          <div className={styles.detail__details_top}>
            <span className={styles.year}>{year}</span>
            <div className={styles.info}>
              {runtime === 0 ? null : (
                <span className={styles.runtime}>{runtime} Min</span>
              )}
              <ul className={styles.genres}>
                {genres.map(genre => (
                  <li key={genre} className={styles.genre}>
                    {genre}
                  </li>
                ))}
              </ul>
            </div>
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
          <div className={styles.detail__details_mid}>
            <span className={styles.like}>LIKE {like}</span>
            <a
              className={styles.youtube}
              href={`https://www.youtube.com/watch?v=${youtube}`}
              target="_blank"
            >
              Youtube
            </a>
          </div>
          <div className={styles.detail__details_low}>
            <p className={styles.description}>
              {description.replaceAll("&#39;", "'").replaceAll("&quot;", '"')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  bgImage: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  like: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  youtube: PropTypes.string.isRequired,
};

export default MovieDetail;

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../../components/MovieDetail/MovieDetail";
import styles from "./Detail.module.scss";

function Detail() {
  // URL의 변수를 받아오는 react-router-dom의 useParams()
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});

  const getDetails = async () => {
    const json = await (
      await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).data;
    setDetails(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getDetails();
  }, []);

  // console.log(details);

  return (
    <div className={styles.container}>
      {loading ? (
        <h2 className={styles.loading}>Loading...</h2>
      ) : (
        <MovieDetail
          title={details.title}
          cover={details.medium_cover_image}
          bgImage={details.background_image}
          year={details.year}
          description={details.description_full}
          genres={details.genres}
          like={details.like_count}
          rating={details.rating}
          runtime={details.runtime}
          youtube={details.yt_trailer_code}
        />
      )}
    </div>
  );
}

export default Detail;

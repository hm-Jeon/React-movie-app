import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h1>{details.title_long}</h1>
          <img src={details.medium_cover_image} alt={details.title_long} />
        </div>
      )}
    </div>
  );
}

export default Detail;

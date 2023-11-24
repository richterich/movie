import {useParams} from 'react-router-dom';

const MovieDetails = () => {
  const {movieId} = useParams<{movieId: string}>();

  return <p>{`Fetch & Display details for movie: ${movieId}`}</p>;
};

export default MovieDetails;

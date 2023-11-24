import {useParams} from 'react-router-dom';

const SeriesDetails = () => {
  const {seriesId} = useParams<{seriesId: string}>();

  return <p>{`Fetch & Display details for series: ${seriesId}`}</p>;
};

export default SeriesDetails;

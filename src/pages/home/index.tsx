import {MovieListTypes} from '~/entities/movie';
import {CategoryPreview, CategoryHero, VideoOverlay} from './ui';

const Home = () => {
  return (
    <>
      <VideoOverlay>
        <VideoOverlay.VideoPlayer />
      </VideoOverlay>
      <CategoryHero id="now-playing-movies">
        <CategoryHero.HorizontalMovieList listType={MovieListTypes.NowPlaying} />
      </CategoryHero>
      <CategoryPreview id="popular-movies" name="Popular Movies" url="#">
        <CategoryPreview.HorizontalMovieList listType={MovieListTypes.Popular} />
      </CategoryPreview>
      <CategoryPreview id="top-rated-movies" name="Top Rated Movies" url="#">
        <CategoryPreview.HorizontalMovieList listType={MovieListTypes.TopRated} />
      </CategoryPreview>
      <CategoryPreview id="upcoming-movies" name="Upcoming Movies" url="#">
        <CategoryPreview.HorizontalMovieList listType={MovieListTypes.Upcoming} />
      </CategoryPreview>
    </>
  );
};

export default Home;

import Loading from "../components/Loading";
import MovieCard from "../components/MovieCard";
import useFetch from "../components/useFetch";

export default function Home() {
  const tvSeriesUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }&language=en-US&page=1`;
  const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }&language=en-US&page=1`;
  const topRatedMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }&language=en-US&page=1`;
  const animationMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }&language=en-US&with_genres=16&page=1`;
  const nollyHoodUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }&with_origin_country=NG
`;
  const personUpload = `https://6763337017ec5852cae863a0.mockapi.io/movies/api/movies`
  const {
    data: popularMovies,
    dataIspending,
    error,
  } = useFetch(popularMoviesUrl);
  const { data: animatedMovies } = useFetch(animationMoviesUrl);
  const { data: topRated } = useFetch(topRatedMoviesUrl);
  const { data: tvSeries } = useFetch(tvSeriesUrl);
  const {data: nollyHood} = useFetch(nollyHoodUrl)
  const {data: personal} = useFetch(personUpload)

  if (dataIspending) {
    return setTimeout(() => {
      <div>Loading...</div>;
    }, 5000);
  }

  if (error) {
    return <div>{error}</div>;
  }

  // console.log(topRated.results);
  // console.log(tvSeries.results);
  // console.log(animatedMovies.results);
  console.log(personal);

  const Pmovies = (popularMovies?.results || []).map((data1) => data1);
  const series = (tvSeries?.results || []).map((data1) => data1);
  const Tmovies = (topRated?.results || []).map((data1) => data1);
  const animations = (animatedMovies?.results || []).map((data1) => data1);
  const nigerianMovies = (nollyHood?.results || []).map((data1) => data1);

  
  return (
    <div className=" w-full h-auto px-7 space-y-7">
      {dataIspending && <Loading />}
      {error && <div> {error}</div>}
      <div className="flex flex-col ">
        <h1 className="text-orange-700 font-black text-2xl pb-3">
          Popular Movies
        </h1>
        {popularMovies && <MovieCard movies={Pmovies} />}
      </div>

      <div className="flex flex-col ">
        <h1 className="text-orange-700 font-black text-2xl pb-3">
          Top Rated Movies
        </h1>
        {topRated && <MovieCard movies={Tmovies} />}
      </div>

      <div className="flex flex-col ">
        <h1 className="text-orange-700 font-black text-2xl pb-3">
          Popular TV Series
        </h1>
        {tvSeries && <MovieCard movies={series} />}
      </div>
      <div className="flex flex-col ">
        <h1 className="text-orange-700 font-black text-2xl pb-3">NollyHood</h1>
        {nollyHood && <MovieCard movies={nigerianMovies} />}
      </div>

      <div className="flex flex-col ">
        <h1 className="text-orange-700 font-black text-2xl pb-3">Animations</h1>
        {animatedMovies && <MovieCard movies={animations} />}
      </div>

      <div className="flex flex-col ">
        <h1 className="text-orange-700 font-black text-2xl pb-3">Personal Uploads</h1>
        {personal && <MovieCard movies={personal} personal={personal} />}
      </div>
    </div>
  );
}

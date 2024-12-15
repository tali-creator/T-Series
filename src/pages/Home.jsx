import MovieCard from "../components/MovieCard";
import useFetch from "../components/useFetch";

export default function Home() {
  const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`;
  const topRatedMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`
  const { data: popularMovies, dataIspending, error } = useFetch(popularMoviesUrl);
  const {data: topRated} = useFetch(topRatedMoviesUrl)

 

  if (dataIspending) return <div>Loading</div>;
  if (error) return <div>{error}</div>;
  console.log(topRated.results)
  console.log(popularMovies.results);
  const Pmovies = popularMovies.results.map((data1) => data1);
  const Tmovies = topRated.results.map((data1) => data1);

  let img = Pmovies.map((img1) => img1.id);

  console.log(img);


  return (
    <div className="bg-black/90 w-full h-auto px-7 space-y-7" >
      Home
      <div className="flex flex-col ">
    <h1 className="text-orange-700 font-black text-2xl pb-3">Popular Movies</h1>
      {popularMovies && <MovieCard movies={Pmovies} />}
      </div>

      <div className="flex flex-col ">
      <h1 className="text-orange-700 font-black text-2xl pb-3">Top Rated Movies</h1>
      {topRated && <MovieCard movies={Tmovies} />}
      </div>
    </div>
  );
}

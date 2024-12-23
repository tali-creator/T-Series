import { useState, useEffect } from "react";
import useFetch from "../components/useFetch";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";

export default function Categories() {
  const [showCategory, setShowCategory] = useState(null);

  // creating diferent movie category end point as an array of objects
  const movieCategories = [
    {
      id: 1,
      title: "Action",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&with_genres=28`,
    },
    {
      id: 2,
      title: "Adventure",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&with_genres=12`,
    },
    {
      id: 3,
      title: "Comedy",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&with_genres=35`,
    },
    {
      id: 4,
      title: "Drama",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&with_genres=18`,
    },
    {
      id: 5,
      title: "Horror",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&with_genres=27`,
    },
    {
      id: 6,
      title: "Romance",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&with_genres=10749`,
    },
    {
      id: 7,
      title: "Science Fiction",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&with_genres=878`,
    },
    {
      id: 8,
      title: "Thriller",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&with_genres=53`,
    },
    {
      id: 9,
      title: "Fantasy",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&with_genres=14`,
    },
    {
      id: 10,
      title: "Animation",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&with_genres=16`,
    },
    {
      id: 11,
      title: "Mystery",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&with_genres=9648`,
    },
    {
      id: 12,
      title: "Musical",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&with_genres=10402`,
    },
    {
      id: 13,
      title: "War",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&with_genres=10752`,
    },
    {
      id: 14,
      title: "Crime",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&with_genres=80`,
    },
    {
      id: 15,
      title: "Family",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&with_genres=10751`,
    },
    {
      id: 16,
      title: "Documentary",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&with_genres=99`,
    },
    {
      id: 17,
      title: "Western",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&with_genres=37`,
    },
    {
      id: 18,
      title: "Historical",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&with_genres=36`,
    },
    {
      id: 19,
      title: "Superhero",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&with_keywords=9715`,
    },
    {
      id: 20,
      title: "Biographical",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&with_keywords=3376`,
    },
    {
      id: 21,
      title: "NollyHood",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&with_origin_country=NG
`,
    },
  ];

  // fiunction to handle view
  function handleView(category) {
    setShowCategory(category);
  }

  const {
    data: categories,
    dataIsPending,
    error,
  } = useFetch(showCategory?.url);

  useEffect(() => {
    if (showCategory) {
      console.log(`Fetching movies for category: ${showCategory.title}`);
    }
  }, [showCategory]);

  return (
    <div className="w-full">
      <h1 className="text-2xl pl-3 font-black text-orange-700">Categories</h1>
      <div className=" flex flex-col md:flex-row space-y-5 md:space-y-0">
        <div className="py-6 px-3 flex justify-evenly w-full flex-none h-fit flex-wrap gap-2 md:w-2/4">
          {/* mapping out all movies category title */}
          {movieCategories.map((category) => (
            <button
              onClick={() => handleView(category)}
              key={category.id}
              className="px-3 py-1 border-2 transition-colors duration-200 rounded-full border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-black font-black">
              {category.title}
            </button>
          ))}
        </div>

        <div className="md:border-l-2 border-t-2 md:border-t-0 w-full flex flex-wrap  justify-center  border-orange-700">
          <h1 className="text-2xl font-black text-orange-700 py-3">
            {showCategory
              ? showCategory.title
              : "Click category to view movies"}
          </h1>

          {/* pending spinner animation */}
          <div className="flex  flex-wrap gap-3 max-h-[400px] overflow-y-scroll">
            {dataIsPending && <Loading />}
            {/* error message incase data was not fetched */}
            {error && <div className="text-red-500">{error}</div>}

            {/* displaying selected categories movies  */}
            {categories && categories.results && !dataIsPending && (
              <MovieCard movies={categories.results} block={"block"} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Search from "./search";

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
    }&with_keywords=superhero`,
  },
  {
    id: 20,
    title: "Biographical",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }&with_keywords=biography`,
  },
];

export default function Nav() {
  const [toggle, setToggle] = useState(false);
  const [movieTitle, setMovieTitle] = useState([]);
  const [filteredTitles, setFilteredTitles] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [notMatch, setNotMatch] = useState("Start typing to search...");
  // const [movie, setMovie] = useState(null);

  function handleToggle() {
    setToggle((prev) => !prev);
  }

  useEffect(() => {
    const fetchAllMovies = async () => {
      const moviesCollection = []; // Full movie objects (title & ID)

      try {
        // Fetch all movie categories in parallel
        const responses = await Promise.all(
          movieCategories.map((category) => fetch(category.url))
        );

        // Parse the JSON for all fetched responses
        const moviesData = await Promise.all(
          responses.map((res) => res.json())
        );

        // Extract relevant data (title and ID) from each category's results
        moviesData.forEach((data) => {
          if (data.results) {
            const movies = data.results.map((movie) => ({
              title: movie.title,
              id: movie.id,
            }));
            moviesCollection.push(...movies);
          }
        });

        setMovieTitle(moviesCollection); // Save movies with title & ID
      } catch (error) {
        console.error("Error fetching movies:", error.message);
      }
    };

    fetchAllMovies();
  }, []);

  // Search handler function
  const handleSearch = (e) => {
    const searchInput = e.target.value.toLowerCase();

    if (searchInput) {
      const searchedMovies = movieTitle.filter((movie) =>
        movie.title.toLowerCase().includes(searchInput)
      );
      setFilteredTitles(searchedMovies);
      if (searchedMovies.length === 0) {
        setNotMatch("No matches found.");
      }
    } else {
      setFilteredTitles([]);
      setNotMatch("Start typing to search...");
    }
  };

  // Blur and focus handlers function
  const handleBlur = () => {
    setTimeout(() => setShowResults(false), 200);
  };

  const handleFocus = () => {
    setShowResults(true);
  };

  return (
    <div
      className={`flex z-90 py-2 ${
        showResults ? "bg-black" : "bg-black/90"
      }  justify-between px-7 ${showResults ? "fixed" : "relative"} w-full`}>
      <Link to={"/"} className="text-orange-700 font-black text-xl">
        T-Series
      </Link>

      {/* Search Section */}
      <div className="hidden sm:flex flex-col items-center md:w-1/2 h-fit">
        <Search
          handleSearch={handleSearch}
          gray
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        {showResults && (
          <div className="w-full h-auto space-y-3 flex flex-col max-h-[200px] overflow-y-scroll shadow-md p-3">
            {filteredTitles.length > 0 ? (
              filteredTitles.map((movie, index) => (
                <Link
                  to={`/movies/${movie.id}`}
                  key={index}
                  className="text-orange-700 text-sm font-black cursor-pointer hover:text-white">
                  {movie.title}
                </Link>
              ))
            ) : (
              <p className="text-white/80 text-sm">{notMatch}</p>
            )}
          </div>
        )}
      </div>

      {/* Navbar Links desktop view*/}
      <div className="w-fit space-x-3 text-orange-700 hidden sm:flex">
        <NavLink
          to={"/"}
          className="hover:text-white/80 transition-colors duration-200">
          Home
        </NavLink>
        <NavLink
          to={"/catergories"}
          className="hover:text-white/80 transition-colors duration-200">
          Categories
        </NavLink>
        <NavLink
          to={"/about"}
          className="hover:text-white/80 transition-colors duration-200">
          About
        </NavLink>
        <NavLink
          to={"/contact"}
          className="hover:text-white/80 transition-colors duration-200">
          Contact-Us
        </NavLink>
        <NavLink
              to={"/login"}
              className="hover:text-white/80 px-2  border border-orange-700 transition-colors duration-200">
            Log in
            </NavLink>
      </div>

      {/* Mobile Menu view*/}
      <div
        className={`w-fit space-x-3 sm:hidden ${
          toggle ? "absolute" : ""
        } transition ${toggle ? "ease-linear" : "ease-in"} duration-200 ${
          toggle ? "w-full" : "w-fit"
        } text-orange-700 flex flex-col items-end top-0 left-0 ${
          toggle ? "p-5" : "p-0"
        } ${toggle ? "bg-black/90" : ""} space-y-3`}>
        <span
          onClick={handleToggle}
          className={`fa ${toggle ? "fa-x" : "fa-bars"} text-xl transition ${
            toggle ? "ease-linear" : "ease-in"
          } duration-200 hover:text-white/80`}></span>

        {toggle && (
          <div className="flex flex-col space-y-2 w-full">
            <div className="w-full flex justify-center">
              <Search
                handleSearch={handleSearch}
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
            </div>
            <NavLink
              onClick={handleToggle}
              to={"/"}
              className="hover:text-white/80 hover:border-b border-orange-700 transition-colors duration-200">
              Home
            </NavLink>
            <NavLink
              onClick={handleToggle}
              to={"/catergories"}
              className="hover:text-white/80 hover:border-b border-orange-700 transition-colors duration-200">
              Categories
            </NavLink>
            <NavLink
              onClick={handleToggle}
              to={"/about"}
              className="hover:text-white/80 hover:border-b border-orange-700 transition-colors duration-200">
              About
            </NavLink>
            <NavLink
              onClick={handleToggle}
              to={"/contact"}
              className="hover:text-white/80 hover:border-b border-orange-700 transition-colors duration-200">
              Contact-Us
            </NavLink>
            
          </div>
        )}
      </div>
    </div>
  );
}

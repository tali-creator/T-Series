/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function MovieCard({movies , block, personal}) {
    
  return (
    <div  className={`flex gap-5  ${block? "flex-wrap" : "flex"}  w-full ${block? "justify-center" : ""} ${block? "overflow-y-scroll" : "overflow-x-scroll"} ${block? "mx-auto" : "mx-0"}`}>
        {movies.map((movie, index) => (
    
        <Link to={`/movies/${movie.id}`} key={movie.id || index} className="w-fit h-fit cursor-pointer">
          <div className="w-[120px] shadow-[0px_1px_2px_1px] h-[170px] sm:w-[170px] sm:h-[260px] rounded-lg overflow-hidden">
            <img className="w-full h-full" src={`${personal? movie.posterPath || "https://via.placeholder.com/150": `https://image.tmdb.org/t/p/w500${movie.poster_path}`}`} alt={movie.title || movie.original_title || "Movie Image"} />
          </div>
          <div className="font-bold text-orange-700 overflow-hidden whitespace-nowrap text-elli{movie.id}psis w-[120px] sm:w-[170px] pt-1">
           {personal? movie.title: movie.original_title}
          </div>
        </Link>
        ))}

    </div>
  );
}
 
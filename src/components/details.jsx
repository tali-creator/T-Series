import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState, useEffect } from "react";
import Loading from "./Loading";

export default function Details() {
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }`;
  const { data, dataIsPending, error } = useFetch(url);

  const [presentView, setPresentView] = useState(null);

  useEffect(() => {
    if (data) {
      const img1 = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
      setPresentView(img1); 
    }
  }, [data]);

  function previous() {
    if (data) {
      const img1 = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
      setPresentView(img1);
    }
  }

  function next() {
    if (data) {
      const img2 = `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`;
      setPresentView(img2);
    }
  }

  return (
    <div className="bg-black/90 ">
      {dataIsPending && <div className="min-h-[400px] flex items-center">{<Loading />}</div>}

      {error && <div className="flex items-center text-white text-3xl min-h-[400px] justify-center">Error: {error}</div>}

      {data && (
        <div className="w-full px-5 h-auto rounded-xl flex flex-col md:flex-row">
          <div className="w-fit h-auto relative flex items-center">
            <img
              className="rounded-xl "
              src={presentView} 
              alt={data.title}
            />
            <button
              onClick={previous}
              className="fa fa-angle-left absolute left-0 text-3xl px-3 py-1.5 text-orange-700 font-black transition ease-in-out duration-200 hover:bg-white/30 rounded-full"></button>
            <button
              onClick={next}
              className="fa fa-angle-right absolute right-0 text-3xl px-3 py-1.5 text-orange-700 font-black transition ease-in-out duration-200 hover:bg-white/30 rounded-full"></button>
          </div>
          <div className="md:w-1/3 w-full px-7 space-y-3 my-5 ">
            <h1 className="text-orange-700 font-black text-3xl mt-4">
              {data.title}
            </h1>
            <p>
              <span className="text-white/70 font-black">Genres: </span>
              {data.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="italic text-sm space-x-3 text-orange-700">
                  <span> /{genre.name} </span>
                </span>
              ))}
            </p>
            <p>
              <span className="text-white/70 font-black">Status: </span>
              <span className="italic text-sm text-orange-700">
                {data.status}
              </span>
            </p>
            <p>
              <span className="text-white/70 font-black">Released Date: </span>
              <span className="italic text-sm text-orange-700">
                {data.release_date}
              </span>
            </p>
            <p>
              <span className="text-white/70 font-black">Popularity: </span>
              <span className="italic text-sm text-orange-700">
                {data.popularity}
              </span>
            </p>
            <p>
              <span className="text-white/70 font-black">Language: </span>
              <span className="italic text-sm text-orange-700">
                {data.original_language}
              </span>
            </p>
            <p>
              <span className="text-white/70 font-black">Adult: </span>
              <span className="italic text-sm text-orange-700">
                {data.adult? "true" : "false" }
              </span>
            </p>
            <p>
              <span className="text-white/70 font-black">
                spoken Languages:{" "}
              </span>
              {data.spoken_languages &&
                data.spoken_languages.map((language, index) => (
                  <span key={index} className="italic text-sm space-x-3 text-orange-700">
                    <span>  /{language.name}  </span>
                  </span>
                ))}
            </p>
            <div className="w-full  space-y-2">
              <h1 className="text-xl font-black text-white/70">Overview</h1>
              <p className="text-orange-700 text-sm">{data.overview} </p>
            </div>
            <p>
              <span className="text-white/70 font-black">
                Production Companies:{" "}
              </span>
              {data.production_companies &&
                data.production_companies.map((language, index) => (
                  <span key={index} className="italic text-sm space-x-3 text-orange-700">
                    <span>  /{language.name} </span>
                  </span>
                ))}
            </p>
            <p>
              <span className="text-white/70 font-black">
                Production countries:{" "}
              </span>
              {data.production_countries &&
                data.production_countries.map((language, index) => (
                  <span key={index} className="italic text-sm space-x-3 text-orange-700">
                    <span> / {language.name}  </span>
                  </span>
                ))}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

import MovieCard from "../components/MovieCard";

export default function Home() {
  return (
    <div className="bg-black/90">Home
        <div className="flex gap-5">
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
    </div>
  )
}

export default function MovieCard() {
  return (
    <div className="w-fit h-fit">
      <div className="w-[150px] shadow-[0px_1px_2px_1px] h-[200px] sm:w-[170px] sm:h-[260px] rounded-lg overflow-hidden">
        <img className="w-full h-full" src="/moana.jpg" alt="" />
      </div>
      <div className="font-bold text-orange-700 truncate ">
        Moana
      </div>
    </div>
  );
}

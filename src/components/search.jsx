// eslint-disable-next-line react/prop-types
export default function Search({ handleSearch, onBlur, onFocus }) {
  return (
    <form
      action=""
      className="md:w-4/5 rounded-full border border-orange-700 overflow-hidden">
      <input
        type="text"
        onFocus={onFocus} // Show results on focus
        onBlur={onBlur}
        onChange={(e) => handleSearch(e)}
        className=" text-white/80 text-sm md:text-md  md:w-full outline-none px-3 italic placeholder:text-sm"
        placeholder="Search Movies"
      />
    </form>
  );
}

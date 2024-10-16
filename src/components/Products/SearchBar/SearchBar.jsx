import { GoSearchIcon } from "../../../assets/icon";

export const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full max-w-sm mx-auto mt-4">
      <input
        value={searchTerm}
        type="text"
        className="w-full py-2 pl-10 pr-4 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <GoSearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
    </div>
  );
};

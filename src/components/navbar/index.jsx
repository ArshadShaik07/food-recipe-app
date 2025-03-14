import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchItem, setSearchItem, handleSubmit } = useContext(GlobalContext);

  return (
    <nav className="sticky top-0 p-4 z-50 bg-white flex flex-col gap-2 justify-between items-center bg-transparent sm:flex-row">
      <h2 className="text-2xl font-bold">
        <NavLink to={"/"}>Food Recipe</NavLink>
      </h2>
      <input
        value={searchItem}
        onChange={(event) => setSearchItem(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSubmit();
          }
        }}
        placeholder="Search food recipe"
        className="border border-slate-500 rounded-full px-5 py-2 min-w-80 text-base shadow-md shadow-blue-300 focus:outline-none "
      />
      <ul className="flex gap-3">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/favourites"}>Favourites</NavLink>
        </li>
      </ul>
    </nav>
  );
}

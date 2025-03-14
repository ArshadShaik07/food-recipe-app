import { Link } from "react-router-dom";

function Recipe({ recipe }) {
  return (
    <div className="flex flex-col w-56 border-y-slate-50 border-white border-2 drop-shadow-lg rounded-xl overflow-hidden shadow-slate-400 shadow-md  ">
      <div className=" flex w-full h-40  overflow-hidden p-2 justify-center">
        <img
          className="object-cover w-full rounded-xl "
          src={recipe.image_url}
        />
      </div>
      <div className="p-2 flex flex-col gap-1 items-start">
        <div>
          <p className="whitespace-wrap  line-clamp-1 text-lg font-bold font-sans text-left">
            {recipe.title}
          </p>
          <p className="text-xs">{recipe.publisher}</p>
        </div>
        <div>
          <Link to={`/recipe-item/${recipe.id}`}>
            <button className="bg-black text-white px-2 py-1.5 text-xs min-w-24 font-semibold text-center rounded-md">
              Recipe Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Recipe;

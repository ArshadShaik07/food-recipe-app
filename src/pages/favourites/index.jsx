import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function Favourites() {
  const { favourites, setFavourites } = useContext(GlobalContext);

  return (
    favourites && (
      <div>
        <div className="flex flex-col gap-y-4 items-center">
          <p className=" font-bold mt-5 text-center text-4xl ">
            {favourites.length > 0 ? "Your Favourites" : "No Favourites found"}
          </p>
          {favourites.length > 0 ? (
            <button
              onClick={() => setFavourites([])}
              className="bg-slate-700 text-white px-4 font-bold py-2 rounded-lg hover:bg-slate-900"
            >
              Clear Favourites
            </button>
          ) : null}
        </div>
        {favourites.map((fav, i) => {
          return (
            <div className="flex flex-col sm:flex-row border border-gray-300 rounded-lg shadow-lg w-3/5 mx-auto my-14 p-5 gap-6 bg-white sm:h-80">
              <div className="w-full sm:1/3 h-auto border border-gray-300 rounded-lg overflow-hidden">
                <img
                  src={fav.image_url}
                  className="object-cover w-full h-full"
                  alt="Recipe"
                />
              </div>

              <div className="flex flex-col justify-start items-start w-2/3 md:w-full gap-2">
                <p className="font-bold text-base sm:text-xl text-gray-800">
                  {fav.title}
                </p>
                <p className="font-bold text-base sm:text-lg text-gray-700">
                  Publisher
                </p>
                <p className="font-medium text-base text-gray-600">
                  {fav.publisher}
                </p>
                <p className="font-medium text-sm text-gray-600">
                  ⏳ Cooking Time - {fav.cooking_time} minutes
                </p>
                <a
                  className="text-blue-500 font-medium text-sm hover:underline mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={fav.source_url}
                >
                  Go to original page →
                </a>
                <button
                  onClick={() => {
                    let temp = [...favourites];
                    temp.splice(i, 1);
                    setFavourites(temp);
                  }}
                  className="bg-black text-sm sm:text-lg font-bold sm:font-normal text-white px-4 py-1.5 rounded-lg shadow-md"
                >
                  Remove from Favourites
                </button>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
}

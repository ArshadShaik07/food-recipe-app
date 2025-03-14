import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Details() {
  const { id } = useParams();
  const { recipeDetails, setRecipeDetails, favourites, setFavourites } =
    useContext(GlobalContext);
  const [loading, setLoading] = useState(false);

  async function getDetails() {
    setLoading(true);
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await response.json();
    console.log(data.data.recipe);
    setRecipeDetails(data.data.recipe);
    setLoading(false);
  }
  // some problem with handleClick function check later
  function handleClick() {
    let temp = [...(favourites || [])];
    for (let i = 0; i < favourites.length; i++) {
      if (temp[i].id === recipeDetails.id) {
        temp.splice(i, 1);
        setFavourites(temp);
        console.log(temp, "favourites");
        return;
      }
    }
    temp.push(recipeDetails);
    setFavourites(temp);
    console.log(temp, "favourites");
  }

  useEffect(() => {
    getDetails();
  }, [id]);

  return !loading && recipeDetails ? (
    <div className="flex flex-col sm:flex-row border border-gray-300 rounded-lg shadow-lg w-9/12 mx-auto my-14 p-5 gap-6 bg-white sm:h-80">
      <div className="w-full sm:1/3 h-auto border border-gray-300 rounded-lg overflow-hidden">
        <img
          src={recipeDetails.image_url}
          className="object-cover w-full h-full"
          alt="Recipe"
        />
      </div>

      <div className="flex flex-col justify-start items-start w-2/3 md:w-full gap-2">
        <p className="font-bold text-lg sm:text-2xl text-gray-800">
          {recipeDetails.title}
        </p>
        <p className="font-bold text-base sm:text-lg text-gray-700">
          Publisher
        </p>
        <p className="font-medium text-base text-gray-600">
          {recipeDetails.publisher}
        </p>
        <p className="font-medium text-sm text-gray-600">
          ⏳ Cooking Time - {recipeDetails.cooking_time} minutes
        </p>
        <a
          className="text-blue-500 font-medium text-sm hover:underline mt-2"
          target="_blank"
          rel="noopener noreferrer"
          href={recipeDetails.source_url}
        >
          Go to original page →
        </a>
        <button
          onClick={handleClick}
          className="bg-black text-sm sm:text-lg font-bold sm:font-normal text-white px-4 py-1.5 rounded-lg shadow-md"
        >
          {favourites.some((fav) => fav.id === recipeDetails.id)
            ? "Added to favourites"
            : "Add to favourites"}
        </button>
      </div>
    </div>
  ) : (
    <p className="font-semibold text-4xl text-center mt-5">Loading Details !</p>
  );
}

import { useContext } from "react";
import { GlobalContext } from "../../context";
import Recipe from "../../components/recipe-item/index.jsx";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) {
    return (
      <div className="text-center font-semibold text-2xl my-2">
        Loading! Please Wait
      </div>
    );
  }
  return (
    <div className="my-4 mx-0 flex gap-4 flex-wrap justify-center p-2">
      {recipeList.length > 0 ? (
        recipeList.map((recipe, i) => <Recipe recipe={recipe} key={i} />)
      ) : (
        <div className="text-center font-semibold text-2xl my-2">
          Nothing to show ! Search for recipes
        </div>
      )}
    </div>
  );
}

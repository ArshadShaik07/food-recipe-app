import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function Global({ children }) {
  const [searchItem, setSearchItem] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState();
  const [recipeList, setRecipeList] = useState([]);
  const [favourites, setFavourites] = useState([]);

  async function handleSubmit() {
    setSearchItem("");
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchItem}`
      );

      const data = await response.json();
      console.log(data.data.recipes);
      setRecipeList(data.data.recipes);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        searchItem,
        setSearchItem,
        handleSubmit,
        recipeList,
        loading,
        recipeDetails,
        setRecipeDetails,
        favourites,
        setFavourites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default Global;

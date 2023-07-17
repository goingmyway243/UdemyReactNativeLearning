import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export default function FavoriteContentProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);

  function addFavorite(id) {
    setFavoriteIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite(id) {
    setFavoriteIds((currentFavIds) =>
      currentFavIds.filter((favId) => favId !== id)
    );
  }

  const value = {
    ids: favoriteIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

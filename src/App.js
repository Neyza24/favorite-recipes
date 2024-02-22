import './App.css';
import AllRecipes from './features/allRecipes/AllRecipes';
import FavoriteRecipes from './features/favoriteRecipes/FavoriteRecipes';
import SearchTerm from './features/searchTerm/SearchTerm';

function App() {
  return (
    <div className="app">
      <h1>Recipe App</h1>
      <SearchTerm />
      <FavoriteRecipes />
      <AllRecipes />
    </div>
  );
}

export default App;

import { configureStore } from '@reduxjs/toolkit';
import { allRecipeReducer } from '../features/allRecipes/allRecipesSlice';



export const store = configureStore({
    reducer: {
        allRecipes: allRecipeReducer,
    }
});
import allRecipesData from "../../data";


// Dispatched when the user first opens the application.
// Sends the allRecipesData array to the store.
export const loadData = () => {
    return {
        type: 'allRecipes/loadData',
        payload: allRecipesData
    }

};

//AllRecipes slice reducer
const initialAllRecipes = [];
export const allRecipeReducer = (allRecipes = initialAllRecipes, action) => {
    switch (action.type) {
        case 'allRecipes/loadData':
            return action.payload
        default:
            return allRecipes
    }
};


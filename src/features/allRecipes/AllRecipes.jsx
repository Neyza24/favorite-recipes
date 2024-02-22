import React from 'react'
// import Recipe from '../../components/Recipe';
// import FavoriteButton from '../../components/FavoriteButton';
import allRecipesData from '../../data';

const AllRecipes = () => {
    return (
        <div className='recipes-container'>
            {
                allRecipesData.map(recipe => (
                    <ul key={recipe.id}>
                        <li>{recipe.name}</li>
                    </ul>
                    // <Recipe>
                    //     <FavoriteButton>
                    //         Add to Favorites
                    //     </FavoriteButton>
                    // </Recipe>
                ))
            }


        </div>
    )
}

export default AllRecipes;
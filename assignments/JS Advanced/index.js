// Hi! Feedback in either Dutch or English is fine, whatever you prefer. Thank you for checking my assignment!

'use strict';
const prompt = require('prompt-sync')();

// Collection of Recipes
const cakeRecipes = require("./cake-recipes.json");

// Global variable to save all recipes of user
let savedRecipes = [];

// ------------------------------------------------ FUNCTIONS ------------------------------------------------- //

// Function that returns all authors of a given recipe list. 
const findAuthors = recipeCollection => {
  let authorList = [];

  recipeCollection.forEach( recipe => {
    if (!authorList.includes(recipe.Author)) {

      authorList.push(recipe.Author)
    }
  });
  return authorList;
}

// Function that logs the name of each recipe. 
const printNames = recipeCollection =>{

  if (recipeCollection.length === 0) {
    console.log("No recipes found.");
    return; 
  }

  recipeCollection.forEach( recipe => {
    const {Name} = recipe;
    console.log(Name)
  })
}

// Function that returns all recipes of a given author. 
const findRecipesOfAuthor = (recipeCollection, authorName) => {

    const recipeList = recipeCollection.filter( recipe => {
      return recipe.Author.toLowerCase() === authorName.toLowerCase()
    })
    
    return recipeList
}

// Function that returns a list of recipes that contain a given ingredient. 
const findRecipesWithIngredient = (recipeCollection, ingredient) => {
  
  const recipeList = recipeCollection.filter( recipe => {
    return recipe.Ingredients.some(ing => {
      return ing.toLowerCase().includes(ingredient.toLowerCase());
    });
  });
  
  return recipeList
};

// Function that takes a list of recipes and a name (string) as input. 
const findRecipeByName = (recipeCollection, recipeName) => {
  const recipe = recipeCollection.find(recipe => 
    recipe.Name.toLowerCase().includes(recipeName.toLowerCase())
  );

  return recipe;
};

// Function that returns all ingredients of a given recipe list into a single array. 
const getAllIngredients = recipeList => {
  return recipeList.reduce((ingredientsList, recipe) => {
    return ingredientsList.concat(recipe.Ingredients);
  }, []);
}


// ----------------------------- DISPLAY MENU FOR USER - CHOICES 1 - 5, 0 TO EXIT ----------------------------- //
const displayMenu = () => {
  console.log("\nRecipe Management System Menu:");
  console.log("1. Show All Authors");
  console.log("2. Show Recipe names by Author");
  console.log("3. Show Recipe names by Ingredient");
  console.log("4. Get Recipe by Name");
  console.log("5. Get All Ingredients of Saved Recipes");
  console.log("0. Exit");
  const choice = prompt("Enter a number (1-5) or 0 to exit: ");
  return parseInt(choice);
}

let choice;

do {
  choice = displayMenu();

  switch (choice) {
    case 1:
      // When 1 is selected, the program should display a list of all unique authors found in the recipe data.
      console.log(`\n---------------------------------------`)
      console.log(`\nAUTHOR NAMES: \n`)
      console.log(findAuthors(cakeRecipes))
      console.log(`\n---------------------------------------`)

      break;
    case 2:
      // If you choose 2, you will be prompted to enter the name of an author.
      const authorName = prompt("Enter a name of an author: ")

      // The program will then display a list of recipe names authored by the specified author.
      console.log(`\n---------------------------------------`)
      console.log(`\nRECIPES BY ${authorName.toUpperCase()}: \n`) 
      printNames(findRecipesOfAuthor(cakeRecipes, authorName))
      console.log(`\n---------------------------------------`)

      break;
    case 3:
      // 3 allows you to search for recipes containing a specific ingredient.
      // You will be prompted to enter the name of the ingredient.
      const ingredient = prompt("Enter an ingredient: ")

      // The program will display a list of recipe names that include the entered ingredient.
      console.log(`\n---------------------------------------`)
      console.log(`\nRECIPES WITH ${ingredient.toUpperCase()}: \n`)
      printNames(findRecipesWithIngredient(cakeRecipes, ingredient))
      console.log(`\n---------------------------------------`)

      break;
    case 4:
      // If you select 4, you can search for a recipe by its name.
      const recipeName = prompt("Enter the recipe name: ")
      const recipe = findRecipeByName(cakeRecipes, recipeName);
      
      // if no recipe is found the program will print 'No recipe found.'
      if (!recipe) {
        console.log(`\n---------------------------------------`)
        console.log(`\nNo recipe found.`);
        console.log(`\n---------------------------------------\n`)
        break;
      }

      // if the recipe is found, the program will display the details of the found recipe.
      console.log(`\n---------------------------------------`)
      console.log(`\n${recipeName.toUpperCase()} RECIPE: \n`)
      console.log(recipe)
      console.log(`\n---------------------------------------\n`)

      // You have the option to save the ingredients of the recipe. 
      const save = prompt("Do you want to save this recipe? y/n  ")
      if (save === 'y') {
        // If the user wants to save the recipe, it's save in a global variable
        savedRecipes = [...savedRecipes, recipe];
      } 
      break;

    case 5:
      // Choose 5 to view a list of ingredients from all the saved recipes.
      if (savedRecipes.length === 0) {
          console.log(`\n---------------------------------------\n`)
          console.log("You have no saved recipes.\nSave a recipe first.");
          console.log(`\n---------------------------------------`)
          break;
      } 

      console.log(`\n---------------------------------------`)
      console.log(`\nALL INGREDIENTS OF SAVED RECIPES: \n`)
      console.log(getAllIngredients(savedRecipes))
      console.log(`\n---------------------------------------`)
      break;

    // Choose 0 to exit the program
    case 0:
      console.log("Exiting...");
      break;
    default:
      console.log("Invalid input. Please enter a number between 0 and 5.");
  }
} while (choice !== 0);

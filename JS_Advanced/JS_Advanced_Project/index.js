'use strict';
const prompt = require('prompt-sync')();

const cakeRecipes = require("./cake-recipes.json");

const savedRecipes = [];

// Your functions here

// Create a function that returns all authors of a given recipe list. 
// Use the .forEach method. The function takes recipes, such as cakeRecipes, 
// as arguments and returns a list of unique authors. 
// This means that each author can only be found once in the returned list. 

const findAuthors = recipeCollection => {
  let authorList = [];

  recipeCollection.forEach( recipe => {
    if (!authorList.includes(recipe.Author)) {
      
      authorList.push(recipe.Author)
    }
  });
  return authorList;
}

// const list = findAuthors(cakeRecipes)
// console.log(`\nAUTHOR NAMES \n`)
// console.log(list)


// Create a function that logs the name of each recipe. 
// As input, it takes in a list of recipes with the same format as cakeRecipes. 
// Use object destructuring in this function. 
// If there are no recipes found in the input, then log that there are no recipes found.

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

// console.log(`\nRECIPE NAMES \n`)
// printNames(cakeRecipes)
// console.log(`\nEMPTY ARRAY \n`)
// printNames([])
// console.log(`\n`)

// Now, create a function that returns all recipes of a given author. 
// Use the .filter method. 
// The function takes recipes and author (string) as arguments and returns all recipes from the given author. 

const findRecipesOfAuthor = (recipeCollection, authorName) => {
    
    const recipeList = recipeCollection.filter( recipe => {
      return recipe.Author.toLowerCase() === authorName.toLowerCase()
    })
    
    return recipeList
}

// const authorName = "Mary Cadogan";
// const recipeList = findRecipesOfAuthor(cakeRecipes, authorName)
// console.log(`\nRECIPES BY ${authorName.toUpperCase()} \n`)
// printNames(recipeList)

// Create a function that returns a list of recipes that contain a given ingredient. 
// The function takes a list of recipes as input and an ingredient as a string. 
// Use the .filter() method to filter the recipes 
// and the .some() method to check if the ingredient list contains the given ingredient (input). 

const findRecipesWithIngredient = (recipeCollection, ingredient) => {
  
  const recipeList = recipeCollection.filter( recipe => {
      return recipe.Ingredients.some(ing => {
      return ing.toLowerCase().includes(ingredient.toLowerCase());
    });
  });

  return recipeList

}


// const ingredient = "140g caster sugar";
// console.log(`\nRECIPES WITH ${ingredient.toUpperCase()} \n`)
// printNames(findRecipesWithIngredient(cakeRecipes, ingredient))
// console.log(`\n`)


// Now, create a function that takes a list of recipes and a name (string) as input. 
// The function returns a single recipe that matches the given name. Use the .find() and .includes() method. 

const findRecipeByName = (recipeCollection, recipeName) => {
  const recipe = recipeCollection.find(recipe => 
    recipe.Name.toLowerCase().includes(recipeName.toLowerCase())
  );

  return recipe;
};

// const recipeName = "Dundee cake";
// console.log(`\n ${recipeName.toUpperCase()} RECIPE \n`)
// console.log(findRecipeByName(cakeRecipes, recipeName));
// console.log(`\n`)


// Finally, create a function that returns all ingredients of a given recipe list into a single array. 
// You can use this function, for example, when you want to create a grocery list. 
// Use the .reduce() method to flatten the recipe array. 

const getAllIngredients = recipeList => {
  return recipeList.reduce((ingredientsList, recipe) => {
    return ingredientsList.concat(recipe.Ingredients);
  }, []);
}

// console.log(`\nSHOPPING LIST FOR RECIPES BY ${authorName.toLocaleUpperCase()} \n`)
// printNames(recipeList)
// console.log(getAllIngredients(findRecipesWithIngredient(cakeRecipes, ingredient)))


// Part 2

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
      // When this option is selected, the program should display a list of 
      // all unique authors found in the recipe data.
      console.log(`\n---------------------------------------`)
      console.log(`\nAUTHOR NAMES: \n`)
      console.log(findAuthors(cakeRecipes))
      console.log(`\n---------------------------------------`)

      break;
    case 2:
      // If you choose this option, you will be prompted to enter the name of an author.
      // The program will then display a list of recipe names authored by the specified author.
      const authorName = prompt("Enter a name of an author: ")
      console.log(`\n---------------------------------------`)
      console.log(`\nRECIPES BY ${authorName.toUpperCase()}: \n`) 
      printNames(findRecipesOfAuthor(cakeRecipes, authorName))
      console.log(`\n---------------------------------------`)

      break;
    case 3:
      // This option allows you to search for recipes containing a specific ingredient.
      // You will be prompted to enter the name of the ingredient.
      // The program will display a list of recipe names that include the entered ingredient.
      const ingredient = prompt("Enter an ingredient: ")
      console.log(`\n---------------------------------------`)
      console.log(`\nRECIPES WITH ${ingredient.toUpperCase()}: \n`)
      printNames(findRecipesWithIngredient(cakeRecipes, ingredient))
      console.log(`\n---------------------------------------`)

      break;
    case 4:
      // If you select this option, you can search for a recipe by its name.
      // Enter the name of the recipe you're looking for.
      // The program will display the details of the found recipe.
      // You'll also have the option to save the ingredients of the recipe. 
      // Save them in a global variable, so that you can save the ingredients of multiple recipes and also use it for the next step. 

      const recipeName = prompt("Enter the recipe name: ")
      const recipe = findRecipeByName(cakeRecipes, recipeName);

      console.log(`\n---------------------------------------`)
      
      if (!recipe) {
        console.log(`\nNo recipe found.`);
        console.log(`\n---------------------------------------\n`)
        break;
      }

      console.log(`\n${recipeName.toUpperCase()} RECIPE: \n`)
      console.log(recipe)
      console.log(`\n---------------------------------------\n`)

      const save = prompt("Do you want to save this recipe? y/n  ")
      if (save === 'y') {
        savedRecipes.push(recipe);
      } 
      break;

    case 5:
    // Choose this option to view a list of ingredients from the saved recipes.
    // The program will display the ingredient list from all the saved recipes.
    console.log(`\n---------------------------------------`)
    console.log(`\nINGREDIENTS OF ALL SAVED RECIPES: \n`)
    printNames(savedRecipes)
    console.log(getAllIngredients(savedRecipes))
    console.log(`\n---------------------------------------`)

      break;
    case 0:
      console.log("Exiting...");
      break;
    default:
      console.log("Invalid input. Please enter a number between 0 and 5.");
  }
} while (choice !== 0);
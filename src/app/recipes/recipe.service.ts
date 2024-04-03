import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: Recipe[] = [
      new Recipe( 'Tasty Schnitzel','A super-tasty Schnitzel - just awesome!', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
      new Recipe('Big Fat Burger','What else you need to say?', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];
  recipeSelected = new EventEmitter<Recipe>();
  constructor() { }
  getRecipes(){
    return this.recipes.slice();
  }

}

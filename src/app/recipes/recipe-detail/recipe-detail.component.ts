import { Recipe } from './../recipe.model';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {

  @Input() recipe!: Recipe;
}

import { Component, OnInit, Input } from '@angular/core';

import { RecipeModal } from "../../recipe.modal";
import { RecipeService } from "../../recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeModal;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelectedRecipe() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}

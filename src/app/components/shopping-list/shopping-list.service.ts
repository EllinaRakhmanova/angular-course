import { EventEmitter } from "@angular/core";

import { IngredientModal } from "../../shared/indredient.modal";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<IngredientModal[]>();

  private ingredients: IngredientModal[] = [
    new IngredientModal('Apples', 5),
    new IngredientModal('Eggs', 4),
    new IngredientModal('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: IngredientModal) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: IngredientModal[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}

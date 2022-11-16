import { Subject } from "rxjs";

import { IngredientModal } from "../../shared/indredient.modal";

export class ShoppingListService {
  ingredientsChanged = new Subject<IngredientModal[]>();
  startedEditing = new Subject<number>();

  private ingredients: IngredientModal[] = [
    new IngredientModal('Apples', 5),
    new IngredientModal('Eggs', 4),
    new IngredientModal('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: IngredientModal) {
    this.ingredients.push(ingredient);
    this.sliceIngredients();
  }

  updateIngredient(index: number, newIngredient: IngredientModal) {
    this.ingredients[index] = newIngredient;
    this.sliceIngredients();
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.sliceIngredients();
  }

  addIngredients(ingredients: IngredientModal[]) {
    this.ingredients.push(...ingredients);
    this.sliceIngredients();
  }

  sliceIngredients() {
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}

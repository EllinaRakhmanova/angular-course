import { IngredientModal } from "../../shared/indredient.modal";

export class RecipeModal {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: IngredientModal[];

  constructor(name: string, desc: string, imagePath: string, ingredients: IngredientModal[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}

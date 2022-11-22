import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { RecipeModal } from "./recipe.modal";
import { IngredientModal } from "../../shared/indredient.modal";

import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<RecipeModal[]>();

  private recipes: RecipeModal[] = [
    new RecipeModal(
      'Пудинг Евы',
      'Пудинг Евы — это  традиционный британский пудинг из ' +
      'яблок и бисквита «Виктория». Этот бисквит назван в честь английской к' +
      'оролевы Виктории (24 мая 1819 — 22 января 1901). Виктория пробыла на троне ' +
      'более 63 лет — больше, чем любой другой британский монарх. Была королевой Соединённого Королевства' +
      ' Великобритании и Ирландии с 20 июня 1837 г., императрица Индии с 1 мая 1876 г. (провозглашение в Индии — ' +
      '1 января 1877 г.), последний представитель Ганноверской династии на троне Великобритании.',
      'https://hellokitchen.ru/wp-content/uploads/2013/10/00.jpg',
      [
        new IngredientModal('Яйца', 2),
        new IngredientModal('Мука', 400),
        new IngredientModal('Яблоки', 4),
      ]),
    new RecipeModal(
      'Солянка',
      'Этот рецепт не претендует на звание самой-самой солянки, скорее, это самый простой её вариант. ' +
      'Главное в этой солянке — копчёности и солёные огурцы, всё остальное можно взаимозаменять. Например, ' +
      'копчёные рёбрышки можно заменить копчёной курочкой или копчёными охотничьими сосисками. ' +
      'Бульон может быть как куриный, так и говяжий. Я всегда варю из курицы, потому что это быстро. ' +
      'Количество маслин и наличие каперсов тоже на ваше усмотрение.',
      'https://hellokitchen.ru/wp-content/uploads/2016/06/16.jpg',
      [
        new IngredientModal('Курица', 1),
        new IngredientModal('Вода', 3),
        new IngredientModal('Картофель', 4),
      ]
    ),
    new RecipeModal(
      'Лёгкий пирог с ананасом',
      'Этот пирог стал частым гостем на моём столе, так как его легко и быстро готовить, плюс, можно ' +
      'бесконечно эксперементировать с начинкой. Изначально, я пекла этот пирог с яблоками, ' +
      'но однажды заменила их ананасом, и теперь это мой любимый вариант. ' +
      'Ананасы в Доминикане дешёвые, очень сладкие и сочные (такие же сладкие, как консервированные, ' +
      'которые можно использовать, если нет свежих). А если к ананасу добавить горсть изюма или мелко ' +
      'арезанного чернослива, то сахар в рецепте можно смело убавлять, либо и вовсе убрать. Если банан ' +
      'будет большой, то пирог получится немного влажный.',
      'https://hellokitchen.ru/wp-content/uploads/2016/05/00-1.jpg',
      [
        new IngredientModal('Яйца', 2),
        new IngredientModal('Мука', 400),
        new IngredientModal('Ананас', 1),
      ]
    ),
    new RecipeModal(
      'Кунжутное печенье',
      'Как же давно лежал у меня этот рецепт, но всё руки не доходили его приготовить! Скажу честно, ' +
      'что это очень хрустящее и ароматное печенье! Особенно вкусно макать его в мёд!' +
      'Однако, на следующий день меня сразила сильнейшая аллергия, перечислив всё что я ела, ' +
      'под подозрение попало именно это печенье.',
      'https://hellokitchen.ru/wp-content/uploads/2015/05/00.jpg',
      [
        new IngredientModal('Яйца', 2),
        new IngredientModal('Мука', 400),
        new IngredientModal('Кунжут', 100),
      ]
    ),
  ];

  // private recipes: RecipeModal[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  setRecipes(recipes: RecipeModal[]) {
    this.recipes = recipes;
    this.sliceRecipe();
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addToShoppingList(ingredients: IngredientModal[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: RecipeModal) {
    this.recipes.push(recipe);
    this.sliceRecipe();
  }

  updateRecipe(index: number, newRecipe: RecipeModal) {
    this.recipes[index] = newRecipe;
    this.sliceRecipe();
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.sliceRecipe();
  }

  sliceRecipe() {
    this.recipeChanged.next(this.recipes.slice());
  }
}

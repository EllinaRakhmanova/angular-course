import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { RecipeService } from "./components/recipes/recipe.service";
import { RecipeResolverService } from "./components/recipes/recipe-resolver.service";
import { AuthInterceptorService } from "./components/auth/auth-interceptor.service";

@NgModule({
  providers: [
    RecipeService,
    RecipeResolverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";

import { HeaderComponent } from "./components/header/header.component";

import { RecipesModule } from "./components/recipes/recipes.module";
import { ShoppingListModule } from "./components/shopping-list/shopping-list.module";
import { AuthModule } from "./components/auth/auth.module";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RecipesModule,
    ShoppingListModule,
    AuthModule,
    SharedModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

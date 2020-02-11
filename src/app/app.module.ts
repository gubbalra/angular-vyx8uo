import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-list/recipe-detail/recipe-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, 
                  HeaderComponent, 
                  RecipeListComponent, 
                  RecipeDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

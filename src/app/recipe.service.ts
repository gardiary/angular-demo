import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Recipe } from './model/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipesUrl = 'http://localhost:8008/api/recipes';

  constructor(private http: HttpClient) { }

  getRecipes (): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesUrl);
  }
}

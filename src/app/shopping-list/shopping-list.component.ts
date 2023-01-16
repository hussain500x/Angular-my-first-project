import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredint.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
ingredient:Ingredient[] = [
  new Ingredient('Apples',5),
  new Ingredient('Tomatoes',10),
];}


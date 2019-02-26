import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent }  from './customers/customers.component';
import { CustomerNewComponent }  from './customer-new/customer-new.component';
import { HeroesComponent }  from './heroes/heroes.component';
import { RecipesComponent }  from './recipes/recipes.component';

const routes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'customer/new', component: CustomerNewComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'recipes', component: RecipesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

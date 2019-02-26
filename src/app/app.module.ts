import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { HttpClientModule, HttpClient }     from '@angular/common/http';
import { SharedModule }         from './shared.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { CustomersComponent }   from './customers/customers.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { RecipesComponent }     from './recipes/recipes.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule }       from './material.module';
import { CustomerNewComponent } from './customer-new/customer-new.component';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    CustomersComponent,
    HeroesComponent,
    RecipesComponent,
    CustomerNewComponent
  ],
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

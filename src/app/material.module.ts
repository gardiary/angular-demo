import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule, MatCheckboxModule,
    MatToolbarModule, MatSidenavModule,
    MatIconModule, MatListModule,
    MatCardModule, MatFormFieldModule,
    MatInputModule, MatSelectModule,
    MatMenuModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule,
    MatToolbarModule, MatSidenavModule,
    MatIconModule, MatListModule,
    MatCardModule, MatFormFieldModule,
    MatInputModule, MatSelectModule,
    MatMenuModule
  ]
})
export class MaterialModule { }

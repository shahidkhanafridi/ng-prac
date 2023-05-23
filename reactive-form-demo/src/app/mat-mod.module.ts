import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

const modules = [
  MatCardModule,
  MatFormFieldModule,
  FormsModule,
  ReactiveFormsModule,
  MatButtonModule,
  MatInputModule
]

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class MatModModule { }

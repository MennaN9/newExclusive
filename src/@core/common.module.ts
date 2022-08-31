import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDirectivesModule } from './directives/directives';
import { CorePipesModule } from './pipes/pipes.module';



@NgModule({
  imports: [CommonModule, CoreDirectivesModule, CorePipesModule],
  exports: [CommonModule, CoreDirectivesModule, CorePipesModule]
})
export class CoreCommonModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryComponent } from './library.component';

@NgModule({
  declarations: [LibraryComponent],
  exports: [LibraryComponent],
  imports: [CommonModule]
})
export class LibraryModule { }

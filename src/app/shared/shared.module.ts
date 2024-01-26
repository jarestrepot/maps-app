import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrashIconComponent } from './svg/trash-icon/trash-icon.component';
import { TagIconComponent } from './svg/tag-icon/tag-icon.component';



@NgModule({
  declarations: [
    TrashIconComponent,
    TagIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TrashIconComponent,
    TagIconComponent
  ]
})
export class SharedModule { }

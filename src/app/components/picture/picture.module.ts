import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureComponent } from './picture.component';
import { ImageModule } from '../image/image.module';



@NgModule({
  declarations: [
    PictureComponent
  ],
  imports: [
    CommonModule,
    ImageModule,
  ],
})
export class PictureModule { }

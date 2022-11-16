import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeRoutingModule } from './theme-routing.module';
import { ThemeComponent } from './theme.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ImageModule } from '../../components/image/image.module';
import { PictureModule } from '../../components/picture/picture.module';
import { ComponentSessionComponent } from './components/component-session/component-session.component';
import { ComponentInformationComponent } from './components/component-information/component-information.component';


@NgModule({
  declarations: [
    ThemeComponent,
    NavigationComponent,
    ComponentSessionComponent,
    ComponentInformationComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    ImageModule,
    PictureModule,
  ],
})
export class ThemeModule { }

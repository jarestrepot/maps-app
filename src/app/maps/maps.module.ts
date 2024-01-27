import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarksPageComponent } from './pages/marks-page/marks-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import { SharedModule } from '../shared/shared.module';
import { CounterAloneComponent } from '../alone/components/counter-alone/counter-alone.component';


@NgModule({
  declarations: [
    MiniMapComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarksPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    SharedModule,
    CounterAloneComponent,
    SideMenuComponent,
  ]
})
export class MapsModule { }

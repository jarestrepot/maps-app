import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { MarksPageComponent } from './pages/marks-page/marks-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

const routes: Routes = [
  {
    path: '',
    component: MapsLayoutComponent,
    children: [
      {
        path: 'fullcreen',
        component: FullScreenPageComponent
      },
      {
        path: 'zoom-range',
        component: ZoomRangePageComponent
      },
      {
        path: 'markers',
        component: MarksPageComponent
      },
      {
        path: 'properties',
        component: PropertiesPageComponent
      },
      {
        path: '**',
        redirectTo: 'fullcreen'
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }

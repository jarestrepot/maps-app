import { Component } from '@angular/core';

interface MenuItem {
  name: string,
  router: string,
}

@Component({
  selector: 'maps-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
  ]
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    {
      router: '/maps/fullscreen', name: 'Full Screen'
    },
    {
      router: '/maps/zoom-range', name: 'Zoom range'
    },
    {
      router: '/maps/markers', name: 'Markers'
    },
    {
      router: '/maps/properties', name: 'House'
    }
  ];
}

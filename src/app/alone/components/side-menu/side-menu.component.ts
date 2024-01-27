import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  name: string,
  router: string,
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  styleUrls: [ './side-menu.component.scss']
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
    },
    {
      router: '/alone', name: 'Alone Page'
    }
  ];
}

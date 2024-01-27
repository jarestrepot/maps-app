import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';
import { SideMenuComponent } from 'src/app/alone/components/side-menu/side-menu.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    CounterAloneComponent,
    SideMenuComponent
  ],
  templateUrl: './alone-page.component.html',
  styleUrls: ['./alone-page.component.scss']
})
export class AlonePageComponent {

}

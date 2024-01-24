import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.scss']
})
export class FullScreenPageComponent implements AfterViewInit {

  map: mapboxgl.Map | undefined;

  @ViewChild('map')
  public divMap?: ElementRef;

  ngAfterViewInit(): void {

    if( !this.divMap ) throw 'Not found this HTML reference';

    this.map = new Map({
      accessToken: 'pk.eyJ1IjoiamFhdnYiLCJhIjoiY2xycGFsb3U2MDRzNTJybm1qanJ2YzBpeCJ9.fj9jqKOSW3JQXwKUCOn8Zg',
      container: this.divMap.nativeElement , // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }

}

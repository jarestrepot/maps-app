import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, LngLat, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.scss']
})
export class MiniMapComponent implements AfterViewInit{

  @ViewChild('map')
  public divMap?: ElementRef;

  @Input() lngLat?: [ number, number ];
  public map?: Map;

  public marker!: Marker

  ngAfterViewInit(): void {

    if( !this.lngLat ) throw "LngLat can't be null ";

    this.map = new Map({
      accessToken: 'pk.eyJ1IjoiamFhdnYiLCJhIjoiY2xycGFsb3U2MDRzNTJybm1qanJ2YzBpeCJ9.fj9jqKOSW3JQXwKUCOn8Zg',
      container: this.divMap?.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.lngLat,
      zoom: 13,
      interactive: false
    });

    new Marker({
      draggable: true
    })
      .setLngLat( this.lngLat )
      .addTo( this.map );
  }

}

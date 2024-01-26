import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Map, LngLat } from 'mapbox-gl';
@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.scss']
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {

  @ViewChild('map')
  public divMap?: ElementRef;
  public zoom: number = 10;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-75.82259144080473, 4.332689981111258);

  ngAfterViewInit(): void {

    if (!this.divMap) throw 'Not found this HTML reference';

    this.map = new Map({
      accessToken: 'pk.eyJ1IjoiamFhdnYiLCJhIjoiY2xycGFsb3U2MDRzNTJybm1qanJ2YzBpeCJ9.fj9jqKOSW3JQXwKUCOn8Zg',
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });
    // Listener
    this.mapListeners();
  }

  ngOnDestroy(): void {
    // Limped de los listeners
    this.map?.off('moveend', () => this.map!.remove());
  }

  mapListeners(){
    if (!this.map) throw 'Map not initialized';

    this.map.on('zoom', ( event ) => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', ( event ) => {
      if( this.map!.getZoom() < 18 ) return;
      this.map!.zoomTo( 18 );
    });

    this.map.on('moveend', ( event ) => {
      this.currentLngLat = this.map!.getCenter();
    });
  }

  zoomIn(){
    this.map?.zoomIn();
  }

  zoomOut() {
    this.map?.zoomOut();
  }

  zoomChanged( value:string ){
    this.zoom = Number( value );
    this.map?.zoomTo( this.zoom );
  }

}

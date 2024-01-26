import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Map, LngLat, Marker } from 'mapbox-gl';

interface MarkerAndColor {
  color: string;
  marker: Marker;
}

interface PlainMarker {
  color: string;
  lngLat: number[];
}

@Component({
  templateUrl: './marks-page.component.html',
  styleUrls: ['./marks-page.component.scss']
})
export class MarksPageComponent implements AfterViewInit, OnDestroy {

  @ViewChild('map')
  public divMap?: ElementRef;

  public currentMarkers: MarkerAndColor[] = [];

  public map?: Map;

  public currentLngLat: LngLat = new LngLat(-75.82259144080473, 4.332689981111258);

  public marker?: Marker;

  ngAfterViewInit(): void {

    if ( !this.divMap ) throw 'Not found this HTML reference';

    this.map = new Map({
      accessToken: 'pk.eyJ1IjoiamFhdnYiLCJhIjoiY2xycGFsb3U2MDRzNTJybm1qanJ2YzBpeCJ9.fj9jqKOSW3JQXwKUCOn8Zg',
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.currentLngLat,
      zoom:17
    });

    this.readFromLocalStorage();
  }

  ngOnDestroy(): void {
    this.marker?.off('dragend',() => this.marker?.remove());
  }

  createMarker() {
    if (!this.map) return;

    const color: string = '#xxxxxx'.replace(/x/g, y => ( Math.random() * 16 | 0 ).toString(16));
    const lngLat: LngLat = this.map.getCenter();

    this.addMarker( lngLat, color );
  }

  addMarker( lngLat:LngLat, color:string  ): void{
    if( !this.map ) return;

    this.marker = new Marker({
      color,
      draggable: true
    })
      .setLngLat( lngLat )
      .addTo( this.map );

    this.currentMarkers.push( {
      color,
      marker: this.marker
    });

    this.saveToLocalStorage();
    // Listener for save marks
    this.marker.on('dragend', () => this.saveToLocalStorage() );
  }

  deleteMarker( index: number ):void {
    this.currentMarkers[index].marker.remove();
    const markerDeleted = this.currentMarkers.splice( index, 1 );
    console.log( markerDeleted );
  }

  flyTo( marker: Marker ):void {
    const zoomSearchMarker: number | undefined = Number(this.map?.getZoom()) < 16 ? 17 : this.map?.getZoom();
    this.map?.flyTo({
      zoom: zoomSearchMarker ?? 17, // Zoom
      center: marker.getLngLat() // Marker coordinates
    })
  }

  saveToLocalStorage(): void {

    const PlainMarker: PlainMarker[] = this.currentMarkers.map( ({ color, marker }) => {
      return {
        color,
        lngLat: marker.getLngLat().toArray()
      }
    });

    localStorage.setItem('plainMarkers', JSON.stringify( PlainMarker ) );

  }

  readFromLocalStorage(){

    const plainMarkers:PlainMarker[] = JSON.parse( localStorage.getItem('plainMarkers') ?? '[]' );

    plainMarkers.forEach( ({ color, lngLat }) => {

      const [lng, lat] = lngLat;
      const coords = new LngLat( lng, lat );
      this.addMarker( coords, color );

    });

  }

}

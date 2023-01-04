import { ApisMapsService, Coordinates } from './../apis-maps.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent {
  cityName: string = '';
  city: Coordinates[] = [];
  markers: any[] = [];

  constructor(private apisService: ApisMapsService) {}
      
  ngOnInit(): void {}

  display: any;
  // center: google.maps.LatLngLiteral = {
  //     lat: 22.2736308,
  //     lng: 70.7512555
  // };
  // zoom = 6;


  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }

  getLocation(){
    this.apisService.getLocation(this.cityName).subscribe((data)=>{
      console.log(data);
      this.city = data;
      navigator.geolocation.getCurrentPosition(() => {
        this.center = {
          lat: this.city[0].latitude,
          lng: this.city[0].longitude,
        };
      });
      this.markers.push({
        position: {
          lat: this.city[0].latitude,
          lng: this.city[0].longitude,
        },
        title: 'Marker title ' + (this.markers.length + 1),
        info: 'Marker info ' + (this.markers.length + 1),
        options: {
          animation: google.maps.Animation.DROP,
        },
      })
    })
      


  }
  zoom = 12;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 20,
    minZoom: 8,
  };

  // move(event: google.maps.MapMouseEvent) {
  //     if (event.latLng != null) this.display = event.latLng.toJSON();
  // }
}

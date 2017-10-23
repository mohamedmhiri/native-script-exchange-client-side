import {Component, ElementRef, ViewChild} from '@angular/core';
import {registerElement} from "nativescript-angular/element-registry";

registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);

@Component({
    selector: "bank",
    templateUrl: "components/bank.component.html",
})
export class BrokerComponent {
    @ViewChild("MapView") mapView: ElementRef;
 
    //Map events
    onMapReady = (event) => {
        console.log("Map Ready");
    };
    public message:string = "Message set.";
    public latitude:number = 30.0;
    public longitude:number = -100.0;
    public zoom:number = 10;
    public bearing:number = 0;
    public tilt:number = 0;

    constructor() {
        this.message = "Home constructed.";
    }
    //OnMapReady(args) { }
    onMarkerSelect(args) { }
    onCameraChanged(args) { }
}

import { Home } from './../models/home';
import { HomeService } from './../services/home.service';
import { Component, ViewChild, ChangeDetectorRef, AfterViewInit, OnInit } from "@angular/core";  
import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import { Observable } from "data/observable";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui-pro/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-telerik-ui-pro/sidedrawer';

@Component({
    selector: "home",
    templateUrl: "components/home.component.html",
    styleUrls: ['components/home.component.css'],
    providers: [HomeService]
})
export class HomeComponent implements AfterViewInit, OnInit {
    items: Home[];
    private drawer: SideDrawerType;
    
    @ViewChild(RadSideDrawerComponent) 
    public drawerComponent: RadSideDrawerComponent;

    constructor(private service: HomeService, private _changeDetectionRef: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.items = this.service.getItems();
    }
    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    public openDrawer() {
        this.drawer.toggleDrawerState();
    }
}

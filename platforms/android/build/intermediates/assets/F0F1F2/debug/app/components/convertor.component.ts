import { ConvertorService } from './../services/convertor.service';
import { Convertor } from './../models/convertor';
import { Component, OnInit, OnChanges } from "@angular/core";
import { RadDataFormComponent } from 'nativescript-telerik-ui-pro/dataform/angular'
@Component({
    selector: "convertor",
    templateUrl: "components/convertor.component.html",
    providers: [ConvertorService]
})
export class ConvertorComponent implements OnInit, OnChanges { 
    result: Convertor
    base: string
    public items: Array<string>
    constructor(private service: ConvertorService) {
    }
    ngOnInit() {
        // this.result = new Convertor()
        this.items = this.service.getItems()
    }
    ngOnChanges() {
        //this.service.convertDevise()        
    }

    getBase(base) {
        
    }
    selectedIndexChanged(picker) {
        let devise = this.service.getItems()[picker.selectedIndex]
        this.base = devise
        let data = { 'base': devise }
        this.service
        .convertDevise(data)
        .subscribe(res => {
            this.result = res
            console.log("response"+res)
        }) 
        //this.getBase(data)
    }
}

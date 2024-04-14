import { Component, Input } from '@angular/core';
import { DropdownSelectComponent } from "../dropdown-select/dropdown-select.component";
import { TableComponent } from '../table/table.component';
import { DataService } from '../../services/data.service';
export const data = [
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5,
    status : {
      isOpen : true ,
      options : ["yes", "no" , "N/A"],
      value : ''
    },
    minutes : {
      isOpen : true ,
      value : ''
    },
    directions : {
      isOpen : true ,
      options : ["down", "up" , "N/A"],
      value : ''
    },

  },
]
@Component({
    selector: 'app-main-page',
    standalone: true,
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.css',
    imports: [DropdownSelectComponent , TableComponent]
  })
  export class MainPageComponent {
    selected : any = [];
    items : any = [];
    departement : any = ["dep1", "dep2" , "dep3" , "dep4" , "dep5"]
 constructor(private dataservice : DataService){
 }

 ngOnInit() {
  this.selected =this.dataservice.data;
 }




  addItem(newItem: any) {
    this.items= [...newItem];
  }

}

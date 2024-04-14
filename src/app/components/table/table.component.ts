import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DropdownSelectComponent } from "../dropdown-select/dropdown-select.component";


@Component({
    selector: 'app-table',
    standalone: true,
    templateUrl: './table.component.html',
    styleUrl: './table.component.css',
    imports: [TableModule, CommonModule, FormsModule, DropdownSelectComponent]
})
export class TableComponent {
 @Input() products!: any[];
 items : any = [];

  addItem(newItem: any , id : any) {
    this.products.forEach(data=>{
      if(data.id === id) {
        data.status.value = newItem.name
      }

    })
  }
}

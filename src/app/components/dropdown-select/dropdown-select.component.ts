import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-dropdown-select',
  standalone: true,
  imports: [NgSelectModule , CommonModule , FormsModule],
  templateUrl: './dropdown-select.component.html',
  styleUrl: './dropdown-select.component.css'
})
export class DropdownSelectComponent {


  name = 'Angular';
  @Input() categories! : any ;
  @Input() flag! : any ;
  @Output() newItemEvent = new EventEmitter<[{}]>();
  selected : any= [];

  addNewItem(sl : any) {
    this.newItemEvent.emit(this.selected);
  }
}

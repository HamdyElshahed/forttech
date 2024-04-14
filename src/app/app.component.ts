import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , NgSelectModule , CommonModule , FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forttech';

  name = 'Angular';

  categories = [
    {id: 1, name: 'Laravel'},
    {id: 2, name: 'Codeigniter'},
    {id: 3, name: 'React'},
    {id: 4, name: 'PHP'},
    {id: 5, name: 'Angular'},
    {id: 6, name: 'Vue'},
    {id: 7, name: 'JQuery', disabled: true},
    {id: 8, name: 'Javascript'},
  ];

  selected = [
    {id: 5, name: 'Angular'},
    {id: 6, name: 'Vue'}
  ];

  getSelectedValue(){
    console.log(this.selected);
  }
}

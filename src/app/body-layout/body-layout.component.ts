import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { UserTableComponent } from '../user-table/user-table.component';
import { AddPatientComponent } from '../add-patient/add-patient.component';

@Component({
  selector: 'app-body-layout',
  standalone: true,
  imports: [
    SearchComponent,
    UserTableComponent,
    AddPatientComponent
  ],
  templateUrl: './body-layout.component.html',
  styleUrl: './body-layout.component.css'
})
export class BodyLayoutComponent {
show: boolean=true;

  AddPatient(): void {
    debugger;
    this.show = this.show? false : true;
  }
}

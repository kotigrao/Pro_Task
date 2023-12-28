import { Component } from '@angular/core';

@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [],
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.css'
})
export class AddPatientComponent {
show: boolean=false;

  AddPatient(): void {
    debugger;
    this.show = this.show? false : true;
  }
}

import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {
  data: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.get('api/Patient/Get').then((response) => {
      debugger;
      this.data = response.data;
    });
  }
}

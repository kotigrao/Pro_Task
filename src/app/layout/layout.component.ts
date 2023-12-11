import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BodyLayoutComponent } from '../body-layout/body-layout.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    BodyLayoutComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}

import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';

@Component({
  selector: 'app-materias',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './materias.component.html',
  styleUrl: './materias.component.css'
})
export class MateriasComponent {

}

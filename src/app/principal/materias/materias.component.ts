import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-materias',
  standalone: true,
  imports: [MaterialModule,CommonModule],
  templateUrl: './materias.component.html',
  styleUrl: './materias.component.css'
})
export class MateriasComponent {

  matricula: number | null = null;
  costo: number = 520;

  calcular(materias: string): void {
    const nummat = parseInt(materias, 10);

    if (isNaN(nummat) || nummat < 0) {
      this.matricula = null;
      return;
    }

    let total = nummat * this.costo;

    if (nummat > 5) {
      total = total * 0.90; // Aplicar 10% de descuento
    }

    this.matricula = total;
  }
}
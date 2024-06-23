import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-salario',
  standalone: true,
  imports: [MaterialModule,CommonModule],
  templateUrl: './salario.component.html',
  styleUrl: './salario.component.css'
})
export class SalarioComponent {

  utilidades: number | null = null;

  calcular(salario: string, tiempo: string): void {
    const salarioNum = parseFloat(salario);
    const tiempotrabj = parseInt(tiempo, 10);

    if (isNaN(salarioNum) || isNaN(tiempotrabj)) {
      this.utilidades = null;
      return;
    }

    if (tiempotrabj < 1) {
      this.utilidades = salarioNum * 0.05;
    } else if (tiempotrabj >= 1 && tiempotrabj < 2) {
      this.utilidades = salarioNum * 0.07;
    } else if (tiempotrabj >= 2 && tiempotrabj < 5) {
      this.utilidades = salarioNum * 0.10;
    } else if (tiempotrabj >= 5 && tiempotrabj < 10) {
      this.utilidades = salarioNum * 0.15;
    } else if (tiempotrabj >= 10) {
      this.utilidades = salarioNum * 0.20;
    } else {
      this.utilidades = 0;
    }
  }
}
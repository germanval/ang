import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trafico',
  standalone: true,
  imports: [MaterialModule,CommonModule],
  templateUrl: './trafico.component.html',
  styleUrl: './trafico.component.css'
})
export class TraficoComponent {

  resultado: string | null = null;

  private limites: { [key: string]: number } = {
    coche: 0.5,
    moto: 0.3,
    camion: 0.3,
    autobus: 0.2
  };

  calcular(vehiculo: string, alcohol: string): void {
    const rango = parseFloat(alcohol);

    if (!vehiculo || isNaN(rango) || rango < 0) {
      this.resultado = "Por favor ingresar datos validos.";
      return;
    }

    const limite = this.limites[vehiculo];

    if (rango > limite) {
      this.resultado = "Positivo.";
    } else {
      this.resultado = "Negativo .";
    }
  }
}
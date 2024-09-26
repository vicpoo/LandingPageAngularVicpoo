import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-suplementos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-suplementos.component.html',
  styleUrl: './cards-suplementos.component.css'
})
export class CardsSuplementosComponent {
  suplementos = [
    { name: 'Proteína en polvo', description: 'Ayuda a reparar y construir músculo tras los entrenamientos', image: 'assets/Proteina.jpeg' },
    { name: 'Creatina', description: 'Aumenta la fuerza y el rendimiento en ejercicios de alta intensidad', image: 'assets/Creatina.jpeg' },
    { name: 'BCAAs', description: 'Reduce la fatiga muscular y acelera la recuperación', image: 'assets/BCAA.jpeg' },
    { name: 'L-Glutamina', description: 'Favorece la recuperación y el crecimiento muscular', image: 'assets/L-Glutamina.jpeg' },
    { name: 'Pre-entrenamiento', description: 'Mejora el enfoque y la energía antes de entrenar', image: 'assets/Pre-Entreno.jpeg' },
    { name: 'Multivitaminas', description: 'Cubre posibles deficiencias nutricionales y apoya la salud general', image: 'assets/Multivitaminas.jpeg' },
    { name: 'Omega-3', description: 'Reduce la inflamación y mejora la salud cardiovascular', image: 'assets/Omega.jpeg' },
    { name: 'Beta-alanina', description: 'Aumenta la resistencia y reduce la fatiga muscular', image: 'assets/Betalanina.jpeg' },
    { name: 'Caseína', description: 'Proporciona una liberación prolongada de proteínas, ideal para antes de dormir', image: 'assets/Caseina.jpeg' },
  ];

  // Función para agrupar suplementos en grupos de N elementos
  agruparSuplementos(suplementos: any[], groupSize: number): any[][] {
    const grupos = [];
    for (let i = 0; i < suplementos.length; i += groupSize) {
      grupos.push(suplementos.slice(i, i + groupSize));
    }
    return grupos;
  }
}

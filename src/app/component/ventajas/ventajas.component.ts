import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Ventaja {
  titulo: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-ventajas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ventajas.component.html',
  styleUrls: ['./ventajas.component.css' ] 
})
export class VentajasComponent {
  
  ventajas: Ventaja[] = [
    {
      titulo: 'Mejora Física',
      descripcion: 'Aumenta tu fuerza y resistencia con entrenamientos regulares.',
      imagen: 'MejoraFisica.jpg' 
    },
    {
      titulo: 'Salud Mental',
      descripcion: 'Reduce el estrés y mejora el estado de ánimo.',
      imagen: 'SaludMental.jpg'
    },
    {
      titulo: 'Disciplina',
      descripcion: 'Desarrolla hábitos saludables y consistentes.',
      imagen: 'Diciplina.jpg'
    },
    {
      titulo: 'Variedad de ejercicios',
      descripcion: 'Accede a equipos y rutinas personalizadas.',
      imagen: 'Variedad de ejercicios.webp'
    },
    {
      titulo: 'Comunidad',
      descripcion: 'Conéctate con personas que comparten tus objetivos.',
      imagen: 'ComunidadFitness.jpg'
    },
    {
      titulo: 'Aumento de energía',
      descripcion: 'Mejora tu resistencia y energía diaria a través del ejercicio regular.',
      imagen: 'AumentoEnergia.webp'
    }
  ];
}

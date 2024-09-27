import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tips',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tips.component.html',
  styleUrl: './tips.component.css'
})
export class TipsComponent {

  tips = [
    {
      title: 'Define tus metas',
      description: '¿Quieres ganar masa muscular, perder peso, o mejorar tu resistencia? Tu rutina debe alinearse con tus objetivos específicos.',
      image: 'assets/definirMetas.png'
    },
    {
      title: 'Combina ejercicios de fuerza y cardio',
      description: 'El entrenamiento de fuerza (pesas) es clave para ganar músculo y mejorar el metabolismo, mientras que el cardio ayuda a quemar calorías y mejorar la salud cardiovascular.',
      image: 'assets/Combina ejercicios de fuerza y cardio.jpg'
    },
    {
      title: 'Planifica la frecuencia',
      description: 'Lo ideal es entrenar entre 3 y 5 veces a la semana, alternando entre diferentes grupos musculares (piernas, espalda, brazos, etc.), para evitar sobrecargas.',
      image: 'assets/Planifica la frecuencia.jpg'
    },
    {
      title: 'Varía los ejercicios',
      description: 'Cambiar tus rutinas cada pocas semanas estimula el crecimiento y mantiene tu cuerpo en constante adaptación.',
      image: ''
    },
    {
      title: 'Incluye descanso y recuperación',
      description: 'No olvides que los días de descanso son esenciales para la reparación muscular y la prevención de lesiones.',
      image: 'assets/Incluye descanso y recuperación.jpg'
    },
    {
      title: 'Aumenta gradualmente la intensidad',
      description: 'Ya sea con más peso o más repeticiones, el progreso gradual es clave para mejorar el rendimiento sin forzar el cuerpo.',
      image: 'assets/images/increase-intensity.jpg'
    }
  ];

}

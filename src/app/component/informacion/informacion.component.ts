import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Faq {
  question: string;
  answer: string;
  showAnswer: boolean;
}

interface Ventaja {
  titulo: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css'
})



export class InformacionComponent {

  faqs: Faq[] = [
    {
      question: '¿Cuánto tiempo debo entrenar?',
      answer: 'Debes entrenar al menos 30 minutos al día.',
      showAnswer: false
    },
    {
      question: '¿Es necesario calentar antes de entrenar?',
      answer: 'Sí, es importante para evitar lesiones.',
      showAnswer: false
    },
    {
      question: '¿Necesito un entrenador personal?',
      answer: 'No es obligatorio, pero un entrenador puede ayudarte a mejorar tu técnica.',
      showAnswer: false
    },
    {
      question: '¿Debo estirar antes o después de entrenar?',
      answer: 'Es recomendable estirar después del entrenamiento.',
      showAnswer: false
    },
    {
      question: '¿Cuáles son los mejores ejercicios para perder peso?',
      answer: 'Los ejercicios cardiovasculares como correr o nadar son excelentes para quemar calorías.',
      showAnswer: false
    },
    {
      question: '¿Qué debo comer antes de entrenar?',
      answer: 'Debes comer algo ligero y rico en carbohidratos, como una fruta.',
      showAnswer: false
    },
    {
      question: '¿Debo hacer ejercicios de fuerza?',
      answer: 'Sí, ayudan a tonificar los músculos y mejorar tu rendimiento.',
      showAnswer: false
    },
    {
      question: '¿Puedo entrenar todos los días?',
      answer: 'Sí, pero debes alternar entre diferentes grupos musculares.',
      showAnswer: false
    },
    {
      question: '¿Con qué frecuencia debo ir al gym?',
      answer: 'Lo ideal es ir al menos 3 veces por semana.',
      showAnswer: false
    },
    {
      question: '¿Qué hago si no veo resultados?',
      answer: 'Consulta a un especialista y revisa tu plan de entrenamiento y dieta.',
      showAnswer: false
    }
  
  ];

  ventajas: Ventaja[] = [
    {
      titulo: 'Mejora Física',
      descripcion: 'Aumenta tu fuerza y resistencia con entrenamientos regulares.',
      imagen: 'assets/MejoraFisica.jpg' 
    },
    {
      titulo: 'Salud Mental',
      descripcion: 'Reduce el estrés y mejora el estado de ánimo.',
      imagen: 'assets/SaludMental.jpg'
    },
    {
      titulo: 'Disciplina',
      descripcion: 'Desarrolla hábitos saludables y consistentes.',
      imagen: 'assets/Diciplina.jpg'
    },
    {
      titulo: 'Variedad de ejercicios',
      descripcion: 'Accede a equipos y rutinas personalizadas.',
      imagen: 'assets/Variedad de ejercicios.webp'
    },
    {
      titulo: 'Comunidad',
      descripcion: 'Conéctate con personas que comparten tus objetivos.',
      imagen: 'assets/ComunidadFitness.jpg'
    },
    {
      titulo: 'Aumento de energía',
      descripcion: 'Mejora tu resistencia y energía diaria a través del ejercicio regular.',
      imagen: 'assets/AumentoEnergia.webp'
    }
  ];

  toggleAnswer(faq: Faq) {
    faq.showAnswer = !faq.showAnswer;
  }

}

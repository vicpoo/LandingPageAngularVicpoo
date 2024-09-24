import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

  faqs = [
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

  toggleAnswer(faq: any) {
    faq.showAnswer = !faq.showAnswer;
  }

}

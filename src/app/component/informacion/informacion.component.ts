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
      answer: ' El tiempo de entrenamiento depende de tus objetivos. Para mantenerte en forma, entrenar entre 30 y 60 minutos al día puede ser suficiente. Si tu objetivo es mejorar el rendimiento o perder peso, podrías aumentar la duración, pero siempre escucha a tu cuerpo para evitar el sobreentrenamiento.',
      showAnswer: false
    },
    {
      question: '¿Es necesario calentar antes de entrenar?',
      answer: 'Sí, el calentamiento es esencial para preparar los músculos y las articulaciones, mejorar la circulación y prevenir lesiones. Puedes hacer entre 5 y 10 minutos de calentamiento, como caminar o hacer movimientos articulares suaves.',
      showAnswer: false
    },
    {
      question: '¿Necesito un entrenador personal?',
      answer: 'No es indispensable, pero un entrenador personal puede ser de gran ayuda, sobre todo si eres principiante. Te guiará para hacer ejercicios correctamente, prevenir lesiones y diseñar un plan específico para tus metas.',
      showAnswer: false
    },
    {
      question: '¿Debo estirar antes o después de entrenar?',
      answer: 'Es recomendable hacer estiramientos dinámicos antes de entrenar para activar los músculos y estiramientos estáticos después para mejorar la flexibilidad y reducir la tensión muscular.',
      showAnswer: false
    },
    {
      question: '¿Cuáles son los mejores ejercicios para perder peso?',
      answer: 'Los ejercicios más efectivos para perder peso suelen ser los que involucran todo el cuerpo y aumentan el ritmo cardíaco, como el cardio (correr, nadar, ciclismo) combinado con entrenamiento de fuerza, como levantamiento de pesas o ejercicios de resistencia.',
      showAnswer: false
    },
    {
      question: '¿Qué debo comer antes de entrenar?',
      answer: 'Antes de entrenar, es ideal consumir carbohidratos de digestión lenta, como avena o frutas, para proporcionar energía sostenida. Un poco de proteína, como yogurt o nueces, también puede ayudar a mantener la masa muscular.',
      showAnswer: false
    },
    {
      question: '¿Debo hacer ejercicios de fuerza?',
      answer: 'Sí, los ejercicios de fuerza son importantes incluso si tu objetivo principal no es ganar músculo. Ayudan a mejorar la densidad ósea, aumentar el metabolismo y mejorar la postura, además de complementar tu entrenamiento cardiovascular.',
      showAnswer: false
    },
    {
      question: '¿Puedo entrenar todos los días?',
      answer: ' Entrenar todos los días no es recomendable para la mayoría de las personas, ya que el cuerpo necesita tiempo para recuperarse. Alternar entre días de ejercicio intenso y días de recuperación ligera, como yoga o caminatas, es más efectivo.',
      showAnswer: false
    },
    {
      question: '¿Con qué frecuencia debo ir al gym?',
      answer: 'La frecuencia ideal depende de tus metas y nivel de experiencia. Generalmente, entre 3 y 5 días a la semana es un buen rango. No olvides incorporar días de descanso para permitir que el cuerpo se recupere.',
      showAnswer: false
    },
    {
      question: '¿Qué hago si no veo resultados?',
      answer: 'Si no estás viendo resultados, es importante revisar tu plan de entrenamiento y tu dieta. Podrías estar necesitando ajustar la intensidad de los ejercicios, variar tu rutina o prestar más atención a tu descanso y alimentación. Considera también consultar con un entrenador o nutricionista.',
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

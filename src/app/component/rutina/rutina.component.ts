import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { H3rutinasComponent} from '../h3rutinas/h3rutinas.component';
import { TipsComponent } from '../tips/tips.component';

@Component({
  selector: 'app-rutina',
  standalone: true,
  imports: [FooterComponent,TipsComponent,H3rutinasComponent],
  templateUrl: './rutina.component.html',
  styleUrl: './rutina.component.css'
})
export class RutinaComponent {

}

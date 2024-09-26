import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { H2suplementosComponent } from '../h2suplementos/h2suplementos.component';
import { CardsSuplementosComponent } from "../cards-suplementos/cards-suplementos.component";

@Component({
  selector: 'app-suplementos',
  standalone: true,
  imports: [FooterComponent, H2suplementosComponent, CardsSuplementosComponent],
  templateUrl: './suplementos.component.html',
  styleUrl: './suplementos.component.css'
})
export class SuplementosComponent {

}

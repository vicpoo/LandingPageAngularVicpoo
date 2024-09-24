import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component'
import { NavbarComponent } from './component/navbar/navbar.component';
import { VentajasComponent } from './component/ventajas/ventajas.component';
import { FooterComponent } from './component/footer/footer.component';
import { FaqComponent } from './component/faq/faq.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,NavbarComponent,VentajasComponent,FooterComponent,FaqComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}

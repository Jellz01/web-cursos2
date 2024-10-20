import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AcursosComponent } from './pages/acursos/acursos.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AcursosComponent,CursosComponent,ContactComponent,InicioComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Web2';
}

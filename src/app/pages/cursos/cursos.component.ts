import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models/user.model';
import { ServiService } from '../servi.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})

export class CursosComponent implements OnInit{

  cursos : Curso [] = [];

  constructor(private cursoServi : ServiService ){}
  ngOnInit(): void {
    
    this.cursos = this.cursoServi.getCursos();
  }




  eliminarCursos(indice : number){

  
      console.log(indice); // To check the index in the console
      this.cursos.splice(indice, 1); // Remove the course at the specified index
      this.cursoServi.guardarCursos(); // Update the service if needed
  }
  
  

  }
  



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




  eliminarCursos(indice: number) {

    indice = indice -1;
    if (indice >= 0 && indice < this.cursos.length) {  // Ensure the index is valid
        console.log("Deleting course at index:", indice);
        console.log("Course to be deleted:", this.cursos[indice]); 

        this.cursos.splice(indice, 1);  // Remove the course at the specified index

        console.log("Course deleted. Remaining courses:", this.cursos); 
        
        if (this.cursos.length === 0) {
            console.log("No courses remaining.");
        }

        this.cursoServi.guardarCursos();  // Save the updated list
    } else {
        console.log("Invalid index. No course deleted.");
        console.log(indice);
    }
}


}




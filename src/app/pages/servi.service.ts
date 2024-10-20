import { Injectable } from '@angular/core';
import { Curso } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ServiService {



  private cursos: Curso [] = [];

  constructor() {

    if (this.estaEnElNavegador()){

      this.cargarCursos();

    }
    
   }






    addCurso(curso : Curso){

      this.cursos.push(curso);
      this.guardarCursos();

    }


    getCursos(): Curso[] {

      return this.cursos
    }

    private estaEnElNavegador(): boolean {
      return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
    }


    guardarCursos(){

      if (this.estaEnElNavegador()){

        localStorage.setItem('cursos', JSON.stringify(this.cursos));

      }
    }

    cargarCursos(){

      if (this.estaEnElNavegador()){

        const cursosGuardados = localStorage.getItem('cursos');

      if (cursosGuardados) {

        this.cursos = JSON.parse(cursosGuardados);

      }

      }
    }


}

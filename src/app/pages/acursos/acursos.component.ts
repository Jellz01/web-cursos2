import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { ServiService } from '../servi.service';
import { Curso } from '../../models/user.model';

@Component({
  selector: 'app-acursos',
  standalone: true,
  imports: [],
  templateUrl: './acursos.component.html',
  styleUrl: './acursos.component.scss'
})
export class AcursosComponent {

@ViewChild ('nombreC') nombreC! : ElementRef;
@ViewChild ('nombreI') nombreI! : ElementRef;
@ViewChild ('fecha') fecha! : ElementRef;
@ViewChild ('duracion') duracion! : ElementRef;
@ViewChild ('descripcion') descripcion! : ElementRef;



  constructor( private cursoServi : ServiService){ }



  addCurso(){

   let nombreCu =  this.nombreC.nativeElement.value;
   let nombreIn = this.nombreI.nativeElement.value;
   let fechaa = this.fecha.nativeElement.value;
   let duracionn = this.duracion.nativeElement.value;
   let descripcionn = this.descripcion.nativeElement.value;
  
   let cursoN = new Curso(nombreCu,nombreIn,fechaa,descripcionn,duracionn)

   this.cursoServi.addCurso(cursoN)
  
  }

}

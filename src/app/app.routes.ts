import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcursosComponent } from './pages/acursos/acursos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { ApplicationInitStatus } from '@angular/core';

export const routes: Routes = [



    {
        path: '',
        component: InicioComponent
    },

    {
        path: 'pages/inicio',
        component: InicioComponent
    },

    {
        path: 'pages/acursos',
        component: AcursosComponent
    },

    {
        path: 'pages/contact',
        component: ContactComponent
    },

    {
        path: 'pages/curso',
        component: CursosComponent
    },
  


];

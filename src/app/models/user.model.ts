export class Curso {
    private static ultimoId = 0;
  
    public id: number
  
    constructor(
      public nombreC: string,
      public nombreI: string,
      public fecha: Date,
      public descripcion: string,
      public duracion: number,
      
    ) {
      this.id = ++Curso.ultimoId;
    }
  }
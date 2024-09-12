export class Resultado{
  url:string;
  tematica:string;
  descripcion:string;
  constructor(url?:string,tematica?:string,descripcion?:string){ // Opcional:  hace el efecto de tener un contructor sin parametroa con uno o con 2....Tampoco hace falta inicializa variables
    this.url=url;
    this.tematica=tematica;
    this.descripcion=descripcion;
  }
}

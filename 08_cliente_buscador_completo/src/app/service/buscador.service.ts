import { Injectable } from '@angular/core';
import { Resultado } from '../model/Resultado';
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { PASS, USER } from '../custom_properties';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  constructor(private http:HttpClient){

  }

  buscar(tematica:string):Observable<Resultado[]>{
    let url:string="http://localhost:8000/buscar/"+tematica;
    return this.http.get<Resultado[]>(tematica);
  }

  alta(resultado:Resultado):Observable<string>{
    let url:string="http://localhost:8000/alta";


 //supongmaos que el recurso está securizado y solo un usuario autorizado puede acceder
 let user="admin";
 let pwd="admin";
 let codificado=btoa(USER+":"+PASS); //codifica todo lo que le pases como un texto en base64
 //creación de encabezados
 let heads=new HttpHeaders();
 heads=heads.set("Authorization","Basic "+codificado);
 return this.http.post<string>(url,resultado,{headers:heads});




    //return this.http.post<string> (url,resultado);// necesito que me devuelva un observable aunque no  me interese ya que sin él la llamada externa NO se hace

  }

  buscarurl(url:string):Observable<Resultado>{
    let pars=new HttpParams()
    pars=pars.set("url",url)
    let urlbase:string="http://localhost:8000/buscar?url="+url;// asi se pone como querystring

    return this.http.get<Resultado> (urlbase,{params:pars});

  }
}

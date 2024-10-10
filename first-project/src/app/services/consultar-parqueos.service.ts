import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Parqueo } from '../modelos/parqueo.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultarParqueosService {

  constructor(private http: HttpClient, private router: Router) {}

  API = 'http://localhost:3000/consulta-parqueo';

  getAll() {
    return this.http.get<any>(this.API + '/get-all');
  }

  getAllComboBox() {
    return this.http.get<any>(this.API + '/get-all/combo-box');
  }

  findByID(form: NgForm) {
    return this.http.get<any>(this.API + `/findByID/${form.value._id}`);
  }

  getEspaciosFrom(form: NgForm) {
    return this.http.get<any>(this.API + `/get-espacios-from/${form.value._id}`);
  }

  updateByID(parqueo: Parqueo) {
    const headers = { 'content-type': 'application/json'}  
    const body =JSON.stringify(parqueo);
    console.log(body)
    return this.http.put(this.API + `/updateByID/${parqueo._id}`, body, {'headers':headers});
  }

  deleteByID(_id: String) {
    return this.http.delete<any>(this.API + `/deleteByID/${_id}`);
  }

}

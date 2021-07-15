import { Injectable } from '@angular/core';
import { TodoDetail } from './todo-detail.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TodoDetailService {

  constructor(private http:HttpClient) { }

  readonly BASE_URL = "http://localhost:14648/api/TodoDetail"
  formData:TodoDetail = new TodoDetail();
  list: TodoDetail[];

  // Add new todos
  postTodoDetail(){
    return this.http.post(this.BASE_URL, this.formData);
  }

  // Update existing todos
  putTodoDetail(){
    return this.http.put(`${this.BASE_URL}/${this.formData.todoDetailId}`, this.formData);
  }

  // Delete existing todos
  deleteTodoDetail(id: number){
    return this.http.delete(`${this.BASE_URL}/${id}`);
  }

  // Get all todos
  refreshList(){
    this.http.get(this.BASE_URL)
    .toPromise()
    .then(res => {
      this.list = res as TodoDetail[]
    }).catch(err => {
      console.error(err);
    })
  }
}

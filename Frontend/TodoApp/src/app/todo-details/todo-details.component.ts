import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TodoDetail } from '../shared/todo-detail.model';
import { TodoDetailService } from '../shared/todo-detail.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css'],
})
export class TodoDetailsComponent implements OnInit {
  constructor(
    public service: TodoDetailService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.service.refreshList();
  }

  prefillForm(selectedTodo: TodoDetail) {
    this.service.formData = Object.assign({}, selectedTodo);
  }

  deleteFormRecord(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteTodoDetail(id).subscribe(
        (res) => {
          this.service.refreshList();
          this.toastr.success('Todo Deleted Successfully', 'Successful');
        },
        (err) => {
          console.log(err);
          this.toastr.error('Failed to Delete Todo', 'Unsuccessful');
        }
      );
    }
  }
}

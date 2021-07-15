import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TodoDetail } from 'src/app/shared/todo-detail.model';
import { TodoDetailService } from 'src/app/shared/todo-detail.service';

@Component({
  selector: 'app-todo-details-form',
  templateUrl: './todo-details-form.component.html',
  styleUrls: ['./todo-details-form.component.css']
})
export class TodoDetailsFormComponent implements OnInit {

  constructor(public service: TodoDetailService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(this.service.formData.todoDetailId == 0){
      this.addTodoRecord(form);
    } else{
      this.updateTodoRecord(form);
    }
  }

  addTodoRecord(form:NgForm){
    this.service.postTodoDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success("Todo Created Successfully", "Successful")
      },
      err => {
        console.log(err);
        this.toastr.error('Failed to Create New Todo', 'Unsuccessful');
        
      }
    )
  }

  updateTodoRecord(form:NgForm){
    this.service.putTodoDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info("Todo Updated Successfully", "Successful")
      },
      err => {
        console.log(err);
        this.toastr.error('Failed to Update Todo', 'Unsuccessful');
      }
    )
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new TodoDetail();
  }


}

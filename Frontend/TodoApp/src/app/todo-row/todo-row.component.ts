import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-row',
  templateUrl: './todo-row.component.html',
  styleUrls: ['./todo-row.component.css'],
})
export class TodoRowComponent implements OnInit {
  @Input() title = 'Sample title';

  constructor() { }

  ngOnInit(){

  }
}
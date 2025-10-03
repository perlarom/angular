import { Component, input, output } from '@angular/core';
import { ITask } from '../../../core/interfaces';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  // Define variables to hold the task and the list of tasks
  outputTaskId = output<number>();
  tasks = input<ITask[]>([]);

  // Define a method to delete a task from the list
  deleteTask(id: number) {
    this.outputTaskId.emit(id);
  }
}

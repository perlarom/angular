import { Component, output, signal } from '@angular/core';
import { ITask } from '../../../core/interfaces';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {

  // señales
  text_field = signal('');
  messageError = signal('');
  outputTask = output<ITask>();

  // Reset input
  resetTask() {
    this.text_field.set('');
    this.messageError.set('');
  }


  // Add task
  addTask() {
    if (!this.text_field().trim()) {
      this.messageError.set('The task name is required');
      return;
    }
    const newTask: ITask = {
      id: Math.floor(Math.random() * 10000),
      name: this.text_field()
    };

    this.outputTask.emit(newTask);
    this.resetTask();
  }
}

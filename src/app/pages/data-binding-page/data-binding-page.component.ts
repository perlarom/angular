import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITask } from '../../core/interfaces';

@Component({
  selector: 'app-data-binding-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-binding-page.component.html',
})
export class DataBindingPageComponent {

  title = 'Data Binding Page';
  text_field = signal('');
  messageError = signal('');
  tasks = signal<ITask[]>([]);

  // Reset input
  resetTask() {
    this.text_field.set('');
    this.messageError.set('');
  }

  // Delete task
  deleteTask(id: number) {
    this.tasks.update(tasks => tasks.filter(task => task.id !== id));
  }

  // Add task
  addTask() {
    if (!this.text_field().trim()) {
      this.messageError.set('The task name is required');
      return;
    }
    const newTask: ITask = {
      id: this.tasks().length + 1,
      name: this.text_field()
    };
    this.tasks.update(tasks => [...tasks, newTask]);
    this.resetTask();
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // <-- IMPORTAR FORMSMODULE

@Component({
  selector: 'app-data-binding-page',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- AGREGAR FormsModule AQUÍ
  templateUrl: './data-binding-page.component.html',
  styleUrl: './data-binding-page.component.css',
})
export class DataBindingPageComponent {
  taskInput: string = '';
  tasks: string[] = [];

  saveTask() {
    if (this.taskInput.trim() !== '') {
      this.tasks.push(this.taskInput.trim());
      this.taskInput = ''; // limpia el input después de guardar
    }
  }

  cancelTask() {
    this.taskInput = ''; // limpia el input sin guardar
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1); // elimina la tarea seleccionada
  }
}

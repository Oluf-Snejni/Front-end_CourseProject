import { Component } from '@angular/core';
import { TrainerComponent } from './trainer/trainer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TrainerComponent],
  templateUrl: './app.html'
})
export class App {}

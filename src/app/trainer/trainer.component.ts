import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { TextService } from '../services/text.service';
import { StatsService } from '../services/stats.service';

@Component({
  selector: 'app-trainer',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatProgressBarModule
  ],
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit {

  words: string[] = [];
  currentWordIndex = 0;

  startTime!: number;
  wpm = 0;
  errors = 0;

  form = new FormGroup({
    input: new FormControl('', { nonNullable: true })
  });

  constructor(
    private textService: TextService,
    private stats: StatsService
  ) {}

  ngOnInit(): void {
    const text = this.textService.getRandomText();
    this.words = text.split(' ');
    this.startTime = Date.now();

    this.form.controls.input.valueChanges.subscribe(value => {
      const currentWord = this.words[this.currentWordIndex];

      // ✔ пользователь ввёл слово и нажал пробел
      if (value.endsWith(' ') && value.trim() === currentWord) {
        this.currentWordIndex++;
        this.form.controls.input.setValue('', { emitEvent: false });
      }

      const seconds = (Date.now() - this.startTime) / 1000;
      this.wpm = this.stats.calculateWPM(this.currentWordIndex * 5, seconds);
      this.errors = this.stats.countErrors(currentWord, value.trim());
    });
  }

  get visibleText(): string {
    return this.words
      .slice(0, this.currentWordIndex + 1)
      .join(' ');
  }
}

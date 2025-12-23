import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { TextService } from '../services/text.service';
import { StatsService } from '../services/stats.service';
import { AudioPlayerComponent } from '../AudioPlayer/audio-player.component';

@Component({
  selector: 'app-trainer',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatProgressBarModule,
    AudioPlayerComponent  
  ],
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit {

  text = '';
  finished = false;
  chars: string[] = [];
  currentIndex = 0;

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

  isDarkTheme = false;

toggleTheme(): void {
  this.isDarkTheme = !this.isDarkTheme;

  if (this.isDarkTheme) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
}

  ngOnInit(): void {
    this.startNewText();

    // Подписка на ввод
    this.form.controls.input.valueChanges.subscribe(value => {
      if (!value) return;

      const typedChar = value[value.length - 1];
      const expectedChar = this.chars[this.currentIndex];

      // ошибка
      if (typedChar !== expectedChar) {
        this.errors++;
        this.form.controls.input.setValue(value.slice(0, -1), { emitEvent: false });
        return;
      }

      this.currentIndex++;

      const seconds = (Date.now() - this.startTime) / 1000;
      this.wpm = this.stats.calculateWPM(this.currentIndex, seconds);

      // очищаем инпут
      this.form.controls.input.setValue('', { emitEvent: false });

      // Проверка окончания тренировки — теперь внутри подписки
      if (this.currentIndex >= this.chars.length) {
        this.finished = true;
      }
    });
  }

  // Метод для получения прогресса
  get progress(): number {
    return (this.currentIndex / this.chars.length) * 100;
  }

  // Метод для отображаемых символов
  get visibleChars(): string[] {
    return this.chars.slice(this.currentIndex, this.currentIndex + 40);
  }

  // Метод для запуска новой тренировки
  restart(): void {
    this.startNewText();
  }

  // Вспомогательный метод для инициализации текста
  private startNewText(): void {
    this.text = this.textService.getRandomText();
    this.chars = this.text.split('');
    this.currentIndex = 0;
    this.errors = 0;
    this.wpm = 0;
    this.finished = false;
    this.startTime = Date.now();
    this.form.controls.input.setValue('', { emitEvent: false });
  }
}

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StatsService {

  calculateWPM(charsTyped: number, seconds: number): number {
    if (seconds === 0) return 0;
    const words = charsTyped / 5;
    return Math.round((words / seconds) * 60);
  }

  countErrors(expected: string, actual: string): number {
    let errors = 0;
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        errors++;
      }
    }
    return errors;
  }
}

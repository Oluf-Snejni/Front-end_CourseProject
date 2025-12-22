import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class StatsService {
calculateWPM(chars: number, seconds: number): number {
if (seconds === 0) return 0;
return Math.round((chars / 5) / (seconds / 60));
}


countErrors(target: string, input: string): number {
let errors = 0;
for (let i = 0; i < input.length; i++) {
if (input[i] !== target[i]) errors++;
}
return errors;
}
}
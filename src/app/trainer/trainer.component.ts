import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormGroup, FormControl } from '@angular/forms';
import { TextService } from "../services/text.service";
import { StatsService } from "../services/stats.service";
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';

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
text = '';
startTime!: number;


form = new FormGroup({
input: new FormControl('', { nonNullable: true })
});


wpm = 0;
errors = 0;


constructor(
private textService: TextService,
private stats: StatsService
) {}


ngOnInit() {
this.text = this.textService.getRandomText();
this.startTime = Date.now();


this.form.controls.input.valueChanges.subscribe(value => {
const seconds = (Date.now() - this.startTime) / 1000;
this.wpm = this.stats.calculateWPM(value.length, seconds);
this.errors = this.stats.countErrors(this.text, value);
});
}
}
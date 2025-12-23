import { describe, it, expect, beforeEach } from 'vitest';
import { TrainerComponent } from './trainer.component';
import { TextService } from '../services/text.service';
import { StatsService } from '../services/stats.service';

describe('TrainerComponent', () => {
  let component: TrainerComponent;
  let textService: TextService;
  let statsService: StatsService;

  beforeEach(() => {
    textService = { getRandomText: () => 'hello world' } as any;
    statsService = { calculateWPM: (chars: number, seconds: number) => 10 } as any;
    component = new TrainerComponent(textService, statsService);
    component.ngOnInit();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize text and chars', () => {
    expect(component.text).toBe('hello world');
    expect(component.chars.length).toBe(11);
  });

  it('should calculate progress correctly', () => {
    component.currentIndex = 5;
    expect(component.progress).toBeCloseTo(45.45, 1); 
  });
});
